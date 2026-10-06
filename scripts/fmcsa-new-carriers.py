#!/usr/bin/env python3
"""Refresh lib/data/new-trucking-companies.json from FMCSA open data (free, no key).

Counts new interstate, authorized-for-hire carriers in the FMCSA Company Census
(data.transportation.gov dataset az4n-8mr2) by the month their USDOT record was added.
Aggregates only: no names or contact details are written.

Usage: python3 scripts/fmcsa-new-carriers.py   (run monthly, then build and push)
"""
import json
import os
import urllib.parse
import urllib.request
from datetime import date, datetime, timezone

DATASET = 'az4n-8mr2'
BASE = f'https://data.transportation.gov/resource/{DATASET}.json'
WHERE = "carrier_operation='A' and classdef like '%AUTHORIZED FOR HIRE%'"
OUT = os.path.join(os.path.dirname(__file__), '..', 'lib', 'data', 'new-trucking-companies.json')
STATES = set('AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split())


def soql(**params):
    qs = urllib.parse.urlencode({f'${k}': v for k, v in params.items()})
    req = urllib.request.Request(f'{BASE}?{qs}', headers={'User-Agent': 'dooza.ai research'})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.load(r)


def quarter_bounds(d):
    """Last full calendar quarter before date d, and the same quarter a year earlier."""
    q = (d.month - 1) // 3  # current quarter index 0..3
    y, q = (d.year, q - 1) if q else (d.year - 1, 3)
    start = date(y, q * 3 + 1, 1)
    end = date(y + (q == 3), (q * 3 + 3) % 12 + 1, 1)
    return start, end, q + 1


def ymd(d):
    return d.strftime('%Y%m%d')


def by_state(start, end):
    rows = soql(select='phy_state, count(*) as n', where=f"{WHERE} and add_date >= '{ymd(start)}' and add_date < '{ymd(end)}'",
                group='phy_state', order='n desc', limit=200)
    return {r['phy_state']: int(r['n']) for r in rows if r.get('phy_state') in STATES}


def main():
    today = datetime.now(timezone.utc).date()
    latest = soql(select='max(add_date) as latest')[0]['latest']

    monthly = soql(select='substring(add_date,1,6) as ym, count(*) as n', where=f"{WHERE} and add_date >= '20210101'",
                   group='ym', order='ym', limit=200)
    this_month = today.strftime('%Y%m')
    months = [{'month': f"{r['ym'][:4]}-{r['ym'][4:]}", 'count': int(r['n'])} for r in monthly if r['ym'] < this_month]

    q_start, q_end, q_num = quarter_bounds(today)
    p_start, p_end = q_start.replace(year=q_start.year - 1), q_end.replace(year=q_end.year - 1)
    cur, prev = by_state(q_start, q_end), by_state(p_start, p_end)
    states = [{'state': s, 'count': n, 'prevYear': prev.get(s, 0)} for s, n in sorted(cur.items(), key=lambda x: -x[1])]

    units = soql(select='power_units, count(*) as n', where=f"{WHERE} and add_date >= '{ymd(q_start)}' and add_date < '{ymd(q_end)}'",
                 group='power_units', limit=500)
    buckets = {'0': 0, '1': 0, '2': 0, '3-5': 0, '6-10': 0, '11+': 0}
    for r in units:
        try:
            u = int(float(r.get('power_units') or 0))
        except ValueError:
            continue
        key = '0' if u == 0 else '1' if u == 1 else '2' if u == 2 else '3-5' if u <= 5 else '6-10' if u <= 10 else '11+'
        buckets[key] += int(r['n'])

    # Survival: each quarterly cohort since 2021, by its USDOT status today (A active, I inactive, P pending).
    rows = soql(select='substring(add_date,1,6) as ym, status_code, count(*) as n',
                where=f"{WHERE} and add_date >= '20210101' and add_date < '{ymd(q_end)}'", group='ym, status_code', limit=5000)
    cohorts = {}
    for r in rows:
        ym = r['ym']
        label = f"{ym[:4]} Q{(int(ym[4:]) - 1) // 3 + 1}"
        c = cohorts.setdefault(label, {'cohort': label, 'active': 0, 'inactive': 0, 'pending': 0})
        key = {'A': 'active', 'I': 'inactive', 'P': 'pending'}.get(r.get('status_code'))
        if key:
            c[key] += int(r['n'])
    cohorts = [cohorts[k] for k in sorted(cohorts)]

    data = {
        'generatedAt': today.isoformat(),
        'source': {'name': 'FMCSA Company Census File', 'dataset': DATASET,
                   'url': f'https://data.transportation.gov/Trucking-and-Motorcoaches/Company-Census-File/{DATASET}',
                   'latestRecord': f'{latest[:4]}-{latest[4:6]}-{latest[6:]}'},
        'definition': 'Interstate carriers (carrier operation A) whose classification includes Authorized For Hire, counted by the date the USDOT record was added.',
        'monthly': months,
        'quarter': {'label': f'Q{q_num} {q_start.year}', 'prevLabel': f'Q{q_num} {p_start.year}',
                    'start': q_start.isoformat(), 'end': q_end.isoformat(), 'states': states,
                    'total': sum(cur.values()), 'prevTotal': sum(prev.values())},
        'fleetSize': [{'bucket': k, 'count': v} for k, v in buckets.items()],
        'cohorts': cohorts,
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w') as f:
        json.dump(data, f, indent=1)
    print(f"wrote {OUT}: {len(months)} months, {data['quarter']['label']} total {data['quarter']['total']} vs {data['quarter']['prevTotal']}")


if __name__ == '__main__':
    main()
