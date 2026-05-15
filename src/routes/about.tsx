import { createFileRoute } from "@tanstack/react-router";
import alexanderPhoto from "@/assets/alexander.webp";
import daenaPhoto from "@/assets/daena.webp";
import hectorPhoto from "@/assets/hector.webp";
import nicolePhoto from "@/assets/Nicole.webp";
import shainePhoto from "@/assets/shaine.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CyberLang Analytics" },
      { name: "description", content: "Meet the CyberLang Analytics team — five UWI computer science students building Hybrid Scam Shield as their capstone project." },
      { property: "og:title", content: "About CyberLang Analytics" },
      { property: "og:description", content: "The team behind Hybrid Scam Shield." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Daena Crosby", role: "Project Manager & Automata Lead", avatar: daenaPhoto },
  { name: "Hector Riettie", role: "Machine Learning Lead", avatar: hectorPhoto },
  { name: "Alexander Waite", role: "Backends & API Lead", avatar: alexanderPhoto },
  { name: "Shaine Bramwell", role: "Frontend & UX Lead", avatar: shainePhoto },
  { name: "Nicole Johnson", role: "Integration & Extension Lead", avatar: nicolePhoto },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.18_55_/_0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            We're <span className="text-gradient">CyberLang Analytics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Five computer science students at the University of the West Indies. We built
            Hybrid Scam Shield as our capstone — a project that proves theory and practice
            belong together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold">The team</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {team.map((m) => (
            <div
              key={m.name} 
              className="group rounded-xl border border-border bg-card/60 p-4 transition hover:border-border-strong hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={m.avatar}
                  alt={`Photo of ${m.name}`}
                  className="h-16 w-16 rounded-full object-cover shadow-glow"
                />
                <div className="flex flex-col">
                  <p className="font-display text-lg font-semibold">{m.name}</p>
                  <p className="text-sm text-primary">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/60 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Supervisors</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Guided by</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Dr. Curtis Bubsy-Earle</li>
              <li>Dr. Sean Miller</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Built with</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "FastAPI", "React", "Scikit-learn", "Custom DFA/NFA", "PhishTank", "Kaggle"].map((t) => (
                <span key={t} className="rounded-md border border-border-strong bg-background/60 px-3 py-1 font-mono text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <div className="rounded-2xl border border-border-strong bg-card/60 p-10 text-center shadow-card md:p-14">
          <h2 className="font-display text-3xl font-bold">Curious to see it in action?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            The Hybrid Scam Shield scanner is live. Test it with any suspicious link or email.
          </p>
          <a
            href="https://cyberlang-capstone.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-md bg-gradient-hero px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Open the scanner ↗
          </a>
        </div>
      </section>
    </>
  );
}
