/* Churn analysis sample report. Pure compute() is shared with the node test. */
(function () {
  "use strict";
  var GAP_CLOSED = 0.25; // assumption: an idea closes a quarter of the churn gap for its group

  function bandKey(bands, word) {
    var ks = Object.keys(bands);
    for (var i = 0; i < ks.length; i++) if (ks[i].toLowerCase().indexOf(word) === 0) return ks[i];
    return null;
  }

  function compute(summary, model, review) {
    var bands = summary.risk_bands;
    var hk = bandKey(bands, "high"), mk = bandKey(bands, "medium"), lk = bandKey(bands, "low");
    var bandSum = bands[hk] + bands[mk] + bands[lk];
    var avgMrrPerCancel = summary.expected_cancels_next_30d > 0 ? summary.expected_mrr_lost_next_30d / summary.expected_cancels_next_30d : 0;
    var drivers = summary.top5_drivers.slice(0, 5).map(function (d) {
      var s = d.segment, n = s.n_with + s.n_without;
      var share = n ? s.n_with / n : 0;
      var groupActive = summary.active_scored * share;
      var excess = groupActive * (s.rate_with - s.rate_without); // extra cancels a month vs. customers without the trait
      var saved = excess * GAP_CLOSED;
      return {
        feature: d.feature, plain: d.plain, action: d.action, group: s.group,
        rate_with: s.rate_with, rate_without: s.rate_without, n_with: s.n_with, n_without: s.n_without,
        times: s.rate_without > 0 ? s.rate_with / s.rate_without : null,
        group_active: groupActive, excess_cancels_month: excess,
        saved_cancels_month: saved, saved_mrr_month: saved * avgMrrPerCancel
      };
    });
    var ideas = drivers.slice().sort(function (a, b) { return b.saved_mrr_month - a.saved_mrr_month; });
    var m = model.metrics, lr = m.logreg;
    return {
      active: summary.active_scored, high: bands[hk], medium: bands[mk], low: bands[lk],
      bandKeys: [hk, mk, lk], bandSum: bandSum,
      cancels30: summary.expected_cancels_next_30d, mrr30: summary.expected_mrr_lost_next_30d,
      top50mrr: summary.top50_mrr, avgMrrPerCancel: avgMrrPerCancel,
      drivers: drivers, ideas: ideas, gapClosed: GAP_CLOSED,
      auc: lr.auc, treeAuc: m.tree ? m.tree.auc : null, lift: lr.lift_top10,
      precision: lr.precision_top10, recall: lr.recall_top10, baseRate: lr.base_rate,
      trainRows: m.train_rows, testRows: m.test_rows, testChurn: m.test_churn,
      trainSnaps: m.train_snapshots, testSnaps: m.test_snapshots,
      lastMonth: review.monthly_churn[review.monthly_churn.length - 1]
    };
  }

  var TABLE_FIELDS = ["customer_id", "plan", "billing", "mrr", "tenure_months", "sessions_30d", "risk", "reasons"];

  function toCSV(rows) {
    function esc(v) { v = Array.isArray(v) ? v.join("; ") : String(v == null ? "" : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
    var out = [TABLE_FIELDS.concat(["subscription_id"]).join(",")];
    rows.forEach(function (r) { out.push(TABLE_FIELDS.concat(["subscription_id"]).map(function (k) { return esc(r[k]); }).join(",")); });
    return out.join("\n") + "\n";
  }

  if (typeof module !== "undefined" && module.exports) module.exports = { compute: compute, toCSV: toCSV, TABLE_FIELDS: TABLE_FIELDS };
  if (typeof document === "undefined") return;

  /* ---------- browser ---------- */
  function $(s) { return document.querySelector(s); }
  function pct(x, d) { return (x * 100).toFixed(d == null ? 1 : d) + "%"; }
  function money(x) { return "$" + Math.round(x).toLocaleString("en-US"); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function band(r) { return r >= 0.30 ? ["high", "p-high"] : r >= 0.15 ? ["medium", "p-med"] : ["low", "p-low"]; }
  function card(label, big, sub) { return '<div class="card"><div class="small mut">' + label + '</div><div class="big">' + big + '</div>' + (sub ? '<div class="small mut">' + sub + "</div>" : "") + "</div>"; }
  function download(name, text, type) {
    var b = new Blob([text], { type: type }), u = URL.createObjectURL(b), a = document.createElement("a");
    a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  function get(f) { return fetch(f, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error(f + " " + r.status); return r.json(); }); }

  Promise.all(["summary.json", "model.json", "review.json", "at_risk.json", "code.json"].map(get)).then(function (j) {
    var summary = j[0], model = j[1], review = j[2], atRisk = j[3], code = j[4];
    var c = compute(summary, model, review);

    $("#sub").textContent = "Export date " + summary.export_date + " · " + review.rows.customers.toLocaleString() + " customers, " +
      review.rows.subscriptions.toLocaleString() + " subscriptions, " + review.rows.activity_monthly.toLocaleString() + " monthly activity rows · signups " +
      review.signup_range[0] + " to " + review.signup_range[1];

    var w = function (n) { return (n / c.active * 100).toFixed(2) + "%"; };
    $("#kpis").innerHTML =
      card("Active customers scored", c.active.toLocaleString(), "every active subscription gets a churn risk") +
      '<div class="card"><div class="small mut">Risk bands</div><div class="bands"><span class="b-high" style="width:' + w(c.high) + '"></span><span class="b-med" style="width:' + w(c.medium) + '"></span><span class="b-low" style="width:' + w(c.low) + '"></span></div>' +
      '<div class="small"><span class="pill p-high">High ' + c.high + '</span> <span class="pill p-med">Medium ' + c.medium + '</span> <span class="pill p-low">Low ' + c.low + "</span></div>" +
      '<div class="small mut">high = 30%+ chance to cancel in 30 days, medium 15-30%</div></div>' +
      card("Expected cancels, next 30 days", c.cancels30.toFixed(0), "sum of every customer's risk (" + c.cancels30 + ")") +
      card("MRR expected to be lost, next 30 days", money(c.mrr30), "top 50 at-risk customers hold " + money(c.top50mrr) + " MRR");

    $("#drivers").innerHTML = c.drivers.map(function (d, i) {
      var mx = Math.max(d.rate_with, d.rate_without, 0.01) * 1.1;
      return '<div class="drv"><div class="num">' + (i + 1) + '</div><div><h3>' + esc(d.plain) + "</h3>" +
        '<div class="small mut">' + (d.times ? d.times.toFixed(1) + "x the churn rate" : "") + " · group: " + esc(d.group) + " (" + d.n_with.toLocaleString() + " vs " + d.n_without.toLocaleString() + " customer-months)</div>" +
        '<div class="bar"><span class="lbl">With this trait</span><span class="trk"><span class="fill" style="display:block;background:var(--red);width:' + (d.rate_with / mx * 100) + '%"></span></span><span class="v">' + pct(d.rate_with) + "</span></div>" +
        '<div class="bar"><span class="lbl">Without it</span><span class="trk"><span class="fill" style="display:block;background:var(--mut);width:' + (d.rate_without / mx * 100) + '%"></span></span><span class="v">' + pct(d.rate_without) + "</span></div>" +
        '<div class="act"><b>Do this:</b> ' + esc(d.action) + "</div></div></div>";
    }).join("");

    // monthly churn sparkline
    var mc = review.monthly_churn, W = 600, H = 120, P = 8, mxr = Math.max.apply(null, mc.map(function (x) { return x.rate; })) * 1.1;
    var pts = mc.map(function (x, i) { return [P + i * (W - 2 * P) / (mc.length - 1), H - P - x.rate / mxr * (H - 2 * P)]; });
    $("#spark").innerHTML = '<polyline fill="none" stroke="var(--a)" stroke-width="2.5" vector-effect="non-scaling-stroke" points="' + pts.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ") + '"/>';
    var peak = mc.reduce(function (a, b) { return b.rate > a.rate ? b : a; });
    $("#sparkcap").textContent = mc[0].month + " to " + c.lastMonth.month + ". Peak " + pct(peak.rate) + " in " + peak.month + " (the month of the Basic price rise); last month " + pct(c.lastMonth.rate) + " (" + c.lastMonth.cancelled + " of " + c.lastMonth.active_start + ").";

    $("#ideanote").textContent = "Expected impact assumes each idea closes " + (c.gapClosed * 100) + "% of the churn gap for its group, at today's active mix, valued at " + money(c.avgMrrPerCancel) + " MRR per cancel (the average in the 30-day forecast). An estimate to rank ideas, not a promise; test each one.";
    $("#ideas").innerHTML = c.ideas.map(function (d, i) {
      return '<div class="drv"><div class="num">' + (i + 1) + '</div><div><h3>' + esc(d.action) + "</h3>" +
        '<div class="small mut">For: ' + esc(d.plain.toLowerCase()) + " (about " + Math.round(d.group_active) + " active customers)</div>" +
        '<div class="act">Expected: about <b>' + d.saved_cancels_month.toFixed(1) + " fewer cancels a month</b>, roughly " + money(d.saved_mrr_month) + " MRR kept per month</div></div></div>";
    }).join("");

    $("#quality").innerHTML =
      card("Holdout AUC (logistic regression)", c.auc.toFixed(3), "1.0 = perfect ranking, 0.5 = coin flip" + (c.treeAuc ? "; a simple decision tree scored " + c.treeAuc.toFixed(3) : "")) +
      card("Top-10% lift", c.lift.toFixed(1) + "x", "the riskiest 10% cancel at " + pct(c.precision, 0) + " vs " + pct(c.baseRate) + " base rate") +
      card("Cancels caught in top 10%", pct(c.recall, 0), "of all cancels in the test months") +
      card("Tested on unseen months", c.testSnaps, "trained on " + c.trainSnaps + " (" + c.trainRows.toLocaleString() + " customer-months); tested on " + c.testRows.toLocaleString() + " with " + c.testChurn + " cancels");
    $("#qualnote").textContent = "Honest read: this is a good, simple model, not magic. It ranks who is most likely to leave well enough to act on; it will miss about half of cancels if you only work the top 10%. On synthetic data the numbers are cleaner than real life; expect a lower AUC on a real export.";

    var reasons = Object.keys(review.cancel_reasons).map(function (k) { return '<span class="chip">' + esc(k.replace(/_/g, " ")) + " " + review.cancel_reasons[k] + "</span>"; }).join("");
    $("#review").innerHTML = '<div class="card"><h3>Fixes made</h3><ul class="small" style="margin:4px 0;padding-left:18px">' + review.fixes.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="card"><h3>Cancel reasons given</h3><div class="chips">' + reasons + "</div></div>";

    // at-risk table
    var sortK = "risk", asc = false;
    try { var saved = JSON.parse(store("churn_sort") || "null"); if (saved && TABLE_FIELDS.indexOf(saved.k) >= 0) { sortK = saved.k; asc = !!saved.asc; } } catch (e) {}
    var uniq = function (k) { return atRisk.map(function (r) { return r[k]; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(); };
    uniq("plan").forEach(function (p) { $("#fplan").insertAdjacentHTML("beforeend", "<option>" + esc(p) + "</option>"); });
    uniq("billing").forEach(function (p) { $("#fbill").insertAdjacentHTML("beforeend", "<option>" + esc(p) + "</option>"); });
    var current = [];
    function render() {
      var q = $("#q").value.trim().toLowerCase(), fp = $("#fplan").value, fb = $("#fbill").value;
      current = atRisk.filter(function (r) {
        if (fp && r.plan !== fp) return false;
        if (fb && r.billing !== fb) return false;
        return !q || [r.customer_id, r.plan, r.billing, r.reasons.join(" ")].join(" ").toLowerCase().indexOf(q) >= 0;
      }).sort(function (a, b) {
        var x = a[sortK], y = b[sortK]; if (Array.isArray(x)) { x = x.join(); y = y.join(); }
        return (x < y ? -1 : x > y ? 1 : 0) * (asc ? 1 : -1);
      });
      document.querySelectorAll("#tbl th").forEach(function (th) { th.classList.toggle("sorted", th.dataset.k === sortK); th.classList.toggle("asc", th.dataset.k === sortK && asc); });
      $("#tbl tbody").innerHTML = current.map(function (r) {
        var b = band(r.risk);
        return "<tr><td class=n>#" + r.customer_id + "</td><td>" + esc(r.plan) + "</td><td>" + esc(r.billing) + '</td><td class=n>' + r.mrr.toFixed(2) + "</td><td class=n>" + r.tenure_months +
          "</td><td class=n>" + r.sessions_30d + '</td><td class=n><span class="pill ' + b[1] + '">' + pct(r.risk, 0) + '</span></td><td class="reasons small">' + r.reasons.map(esc).join("; ") + "</td></tr>";
      }).join("");
      $("#count").textContent = current.length + " of " + atRisk.length + " shown";
    }
    document.querySelectorAll("#tbl th").forEach(function (th) {
      th.addEventListener("click", function () {
        if (sortK === th.dataset.k) asc = !asc; else { sortK = th.dataset.k; asc = th.dataset.k === "plan" || th.dataset.k === "billing"; }
        store("churn_sort", JSON.stringify({ k: sortK, asc: asc })); render();
      });
    });
    ["#q", "#fplan", "#fbill"].forEach(function (s) { $(s).addEventListener("input", render); });
    $("#csv").addEventListener("click", function () { download("at_risk_customers.csv", toCSV(current), "text/csv"); });
    render();

    $("#src").textContent = code.source;
    $("#codename").textContent = code.filename + " · " + code.source.split("\n").length + " lines";
    $("#dlcode").addEventListener("click", function () { download(code.filename, code.source, "text/x-python"); });

    // tabs
    function show(t) {
      document.querySelectorAll(".tabs button").forEach(function (b) { b.classList.toggle("on", b.dataset.tab === t); });
      ["report", "list", "code"].forEach(function (n) { $("#tab-" + n).classList.toggle("hidden", n !== t); });
      store("churn_tab", t);
    }
    document.querySelectorAll(".tabs button").forEach(function (b) { b.addEventListener("click", function () { show(b.dataset.tab); }); });
    var hash = (location.hash || "").slice(1);
    if (["report", "list", "code"].indexOf(hash) >= 0) show(hash);
  }).catch(function (e) {
    $("#sub").textContent = "Could not load the report data (" + e.message + "). Please reload.";
  });
})();
