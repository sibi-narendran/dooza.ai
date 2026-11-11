/*
 * CBH GSK sample reference runner (Dooza demo, SAMPLE ONLY).
 * Deterministic: same rules + same fixtures => same results. No network, no clock, no randomness.
 * Rules (rules.json) and fixtures (fixtures.json) stay outside this file; nothing here names a case.
 * evaluate() never reads case.expected. compare() runs afterwards, field by field.
 * Works in a browser (window.CBHRunner) and in node (module.exports).
 */
(function (root) {
  "use strict";
  var RUNNER_VERSION = "0.3.0-sample";
  var VALID_VALUES = ["yes", "no"];
  var VALID_SCOPES = ["participant", "family"];

  function byId(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function empty(disposition, reasons, extra) {
    var r = {
      disposition: disposition, finding_type: null, claim_ceiling: "none", support_level: "none",
      rejected_claims: [], blocked_on: [], reasons: reasons, lineage: {}, ignored_inputs: {}
    };
    for (var k in (extra || {})) r[k] = extra[k];
    return r;
  }

  // Stage 4 Characterization over one case. GSK records are read only.
  function evaluate(rules, c) {
    var rc = byId(rules.rule_configurations, c.rule_id);
    if (!rc) return empty("ERROR", ["Unknown rule configuration " + c.rule_id]);
    var ev = byId(rules.evaluators, rc.evaluator);
    if (!ev || ev.status !== "delivered") {
      return empty("NOT_RUN", ["Evaluator " + rc.evaluator + " is " + (ev ? ev.status : "missing") +
        (ev && ev.owner ? " (owner: " + ev.owner + ")" : "") + "; case not executed, nothing inferred"]);
    }
    var evidence = c.evidence || [];
    // 1. Input validation: invalid input is reported, never coerced.
    var bad = [];
    evidence.forEach(function (e) {
      if (VALID_VALUES.indexOf(e.value) < 0) bad.push(e.id + ".value='" + e.value + "' not in [yes,no]");
      if (VALID_SCOPES.indexOf(e.scope) < 0) bad.push(e.id + ".scope='" + e.scope + "' not in [participant,family]");
    });
    if (bad.length) return empty("INVALID_INPUT", ["Invalid input rejected: " + bad.join("; ")]);

    // 2. Evidence requirements: missing (never supplied) vs negative (supplied, does not satisfy).
    var missing = [], unmet = [], used = [], reasons = [];
    rc.requires.forEach(function (erId) {
      var er = byId(rules.evidence_requirements, erId);
      var items = evidence.filter(function (e) { return e.input_key === er.input_key; });
      if (!items.length) {
        missing.push(er.id + ":" + er.input_key);
        reasons.push(er.id + " (" + er.input_key + ") was never supplied: missing evidence, " + er.on_missing);
        return;
      }
      var ok = items.filter(function (e) {
        return e.value === "yes" &&
          (er.required_scope === "either" || e.scope === er.required_scope) &&
          (!er.requires_qualification || e.qualified === true);
      });
      if (ok.length) {
        ok.forEach(function (e) { used.push(e.id); });
        reasons.push(er.id + " satisfied by " + ok.map(function (e) { return e.id; }).join(","));
      } else {
        var why = items.map(function (e) {
          if (e.value !== "yes") return e.id + " answered '" + e.value + "'";
          if (er.required_scope !== "either" && e.scope !== er.required_scope) return e.id + " scope is " + e.scope + ", rule needs " + er.required_scope;
          return e.id + " not qualified";
        }).join("; ");
        unmet.push(er.id);
        reasons.push(er.id + " supplied but negative/unsatisfied (" + why + "): " + er.on_negative);
      }
    });

    // 3. Independence boundaries: recorded, never used for support.
    var ignored = {};
    rules.boundaries.forEach(function (b) {
      if (b.type === "independence" && b.applies_to.indexOf(rc.id) >= 0 && c.context && c.context[b.field] !== undefined) {
        ignored[b.field] = c.context[b.field];
        reasons.push(b.id + ": " + b.field + "='" + c.context[b.field] + "' recorded, does not change support");
      }
    });

    var prop = byId(rules.propositions, rc.proposition);
    var lineage = {
      rule: rc.id + "@" + rc.version, proposition: rc.proposition, source: prop ? prop.source : null,
      evidence_requirements: rc.requires.slice(), evidence_used: used.slice().sort(),
      ruleset: rules.ruleset_id + "@" + rules.version, runner: RUNNER_VERSION
    };

    if (missing.length) {
      var r1 = empty("BLOCKED", reasons.concat(["No inference made while a required input is missing"]));
      r1.blocked_on = missing; r1.lineage = lineage; r1.ignored_inputs = ignored;
      return r1;
    }

    var rejected = [];
    var permitted = !unmet.length;
    (c.requested_claims || []).forEach(function (claim) {
      if (permitted && claim === rc.output.finding_type) return;
      var bd = rules.boundaries.filter(function (b) {
        return b.type === "prohibited_inference" && b.claim === claim && b.applies_to.indexOf(rc.id) >= 0;
      })[0];
      rejected.push(claim);
      reasons.push("Requested claim " + claim + " rejected" + (bd ? " by " + bd.id + " (prohibited inference)" : " (not permitted by " + rc.id + ")"));
    });
    rejected.sort();

    if (!permitted) {
      var r2 = empty("WITHHELD", reasons.concat(["Interpretation correctly withheld: evidence supplied but does not meet " + rc.id]));
      r2.rejected_claims = rejected; r2.lineage = lineage; r2.ignored_inputs = ignored;
      return r2;
    }
    return {
      disposition: "PERMITTED", finding_type: rc.output.finding_type, claim_ceiling: rc.output.claim_ceiling,
      support_level: rc.output.support_level, rejected_claims: rejected, blocked_on: [],
      reasons: reasons.concat([rc.id + " permits " + rc.output.finding_type + " up to " + rc.output.claim_ceiling]),
      lineage: lineage, ignored_inputs: ignored
    };
  }

  function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

  // Test status from observed vs the expected result fixed before the run.
  function compare(fields, expected, observed) {
    if (observed.disposition === "NOT_RUN") return { status: "NOT RUN", diffs: [], reason: observed.reasons.join("; ") };
    if (observed.disposition === "BLOCKED") return { status: "BLOCKED", diffs: [], reason: "Blocked on " + observed.blocked_on.join(", ") + ": required input never supplied" };
    var diffs = [];
    fields.forEach(function (f) {
      if (!same(expected[f], observed[f])) diffs.push({ field: f, expected: expected[f], observed: observed[f] });
    });
    if (diffs.length) return { status: "FAILED", diffs: diffs, reason: diffs.map(function (d) { return d.field + ": expected " + JSON.stringify(d.expected) + ", observed " + JSON.stringify(d.observed); }).join("; ") };
    return { status: "PASSED", diffs: [], reason: observed.disposition === "WITHHELD" ? "Passed by correctly withholding an interpretation" : "Observed matches expected on " + fields.join(", ") };
  }

  function runAll(rules, fixtures) {
    var counts = { "PASSED": 0, "FAILED": 0, "BLOCKED": 0, "NOT RUN": 0 };
    var results = fixtures.cases.map(function (c) {
      var observed = evaluate(rules, c);
      var t = compare(fixtures.compared_fields, c.expected, observed);
      counts[t.status]++;
      return { case_id: c.id, title: c.title, rule_id: c.rule_id, status: t.status, reason: t.reason, diffs: t.diffs, expected: c.expected, observed: observed };
    });
    return {
      sample: true, ruleset: rules.ruleset_id + "@" + rules.version, fixture: fixtures.fixture_id + "@" + fixtures.version,
      runner: RUNNER_VERSION, counts: counts, total: results.length, results: results
    };
  }

  var api = { RUNNER_VERSION: RUNNER_VERSION, evaluate: evaluate, compare: compare, runAll: runAll };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.CBHRunner = api;
})(typeof window !== "undefined" ? window : this);
