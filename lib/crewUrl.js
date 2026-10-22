// Sign-up link for Dooza Crew. Plain module so server and client components can both call it.
// ?task= is kept through sign-up and handed to the master agent as its first job (Daedalus 2026-10-22 15:56).
export function crewSignupUrl(placement, task) {
    const params = new URLSearchParams({ utm_source: "dooza", utm_medium: "page", utm_content: placement });
    if (task) params.set("task", task.slice(0, 500));
    return `https://crew.dooza.ai/?${params.toString()}`;
}
