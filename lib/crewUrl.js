// Sign-up link for Dooza Crew. Plain module so server and client components can both call it.
// ?task= is kept through sign-up and handed to the master agent as its first job (Daedalus 2026-10-22 15:56).
// 2026-10-29: pass the visitor's own campaign parameters through to Crew. Before this every sign-up that
// started on dooza.ai was labelled utm_source=dooza&utm_medium=page, so paid Facebook visitors and organic
// visitors were indistinguishable in Crew's sign-up report (Odysseus 10-28: 56 paid FB visitors, 0 trials,
// no way to attribute). Defaults stay dooza/page when the visitor arrived with no campaign parameters.
const KEEP = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "msclkid"];

function incoming() {
    if (typeof window === "undefined") return null;
    try {
        const p = new URLSearchParams(window.location.search);
        const found = {};
        for (const k of KEEP) {
            const v = p.get(k);
            if (v) found[k] = v;
        }
        return Object.keys(found).length ? found : null;
    } catch (e) {
        return null;
    }
}

export function crewSignupUrl(placement, task) {
    const inc = incoming();
    const params = inc
        ? new URLSearchParams({ ...inc, utm_content: inc.utm_content || placement })
        : new URLSearchParams({ utm_source: "dooza", utm_medium: "page", utm_content: placement });
    if (task) params.set("task", task.slice(0, 500));
    return `https://crew.dooza.ai/?${params.toString()}`;
}
