import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import urlScanImage from "@/assets/urlScan.jpeg";
import emailScanImage from "@/assets/emailScan.jpeg";
import gmailScanImage from "@/assets/gmail_scan.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hybrid Scam Shield — Explainable Phishing Detection | CyberLang Analytics" },
      { name: "description", content: "A hybrid system combining automata theory and machine learning to detect phishing URLs and emails — with transparent, explainable decisions." },
      { property: "og:title", content: "Hybrid Scam Shield — Explainable Phishing Detection" },
      { property: "og:description", content: "Automata + ML phishing detection that tells you why something is suspicious." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.18_55_/_0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 text-center md:pt-32">
          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Phishing detection
            <br />
            you can <span className="text-gradient">actually trust</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Hybrid Scam Shield combines <span className="text-foreground">formal languages &amp; automata</span> with{" "}
            <span className="text-foreground">machine learning</span> to flag scam URLs and emails and tells you{" "}
            <em>why</em>. No black boxes. No guessing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://cyberlang-capstone.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Try the Live Scanner <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-card/40 px-6 py-3 text-sm font-semibold transition hover:bg-card"
            >
              See how it works
            </Link>
          </div>

          {/* Mock terminal preview */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-border-strong bg-card/60 p-1 text-left shadow-card backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">scam-shield · scan</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-xs md:text-sm">
              <p><span className="text-muted-foreground">$</span> scan <span className="text-primary">https://paypa1-verify-account.tk/login</span></p>
              <p className="text-muted-foreground">→ regex match: URL-04 (brand lookalike)</p>
              <p className="text-muted-foreground">→ DFA accepted: URL-08 (suspicious TLD)</p>
              <p className="text-muted-foreground">→ ML confidence: 0.97</p>
              <p className="font-semibold text-destructive">⚠ PHISHING — 3 patterns matched</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">What it is</p>
          <h2 className="mt-3 text-4xl font-bold">A scanner with reasoning baked in</h2>
          <p className="mt-4 text-muted-foreground">
            Paste a link or email. Hybrid Scam Shield runs it through layered checks and returns a clear verdict —
            plus the exact patterns that triggered it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              image: urlScanImage,
              title: "URL Scanning",
              body: "Detects lookalike domains, suspicious TLDs, IP-based hosts, punycode tricks, and shady redirects.",
            },
            {
              image: emailScanImage,
              title: "Email Text Analysis",
              body: "Spots credential-harvesting language, fake payment alerts, and pressure tactics in subject lines and bodies.",
            },
            {
              image: gmailScanImage,
              title: "Explainable Verdicts",
              body: "Every flag comes with which rules matched and why — no opaque ML scores.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-border bg-card/60 p-6 transition hover:border-border-strong hover:shadow-glow"
            >
              <div className="mb-4 w-full">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-40 w-full rounded-md object-cover shadow-glow"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>

      </section>

      {/* WHY USE IT */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Why use it</p>
            <h2 className="mt-3 text-4xl font-bold">Built for trust, not just accuracy</h2>
            <p className="mt-4 text-muted-foreground">
              Most phishing tools are black boxes. They flag a message and leave you guessing.
              Caribbean users — and the organisations protecting them — need answers, not just alerts.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Transparent — every decision is backed by a matched pattern",
                "Hybrid — formal rules catch what ML misses, and vice versa",
                "Lightweight — runs on CPU-only services, no paid APIs",
                "Caribbean-aware — tuned for scams targeting our region",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "97%+", v: "Detection accuracy on test set" },
              { k: "30+", v: "Formal rules across URLs & email" },
              { k: "<200ms", v: "Average scan time" },
              { k: "100%", v: "Open & explainable" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-background/60 p-6">
                <p className="font-display text-3xl font-bold text-gradient">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-bold">Four layers. One verdict.</h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Input", d: "URL or email text submitted via the web app or Chrome extension." },
            { n: "02", t: "Automata", d: "Regex → NFA → DFA pipeline matches phishing patterns formally." },
            { n: "03", t: "ML Layer", d: "Logistic regression & random forest weigh structural + lexical features." },
            { n: "04", t: "Verdict", d: "Phishing or legitimate — with the matched rules and confidence." },
          ].map((step) => (
            <div key={step.n} className="relative rounded-xl border border-border bg-card/60 p-6">
              <p className="font-mono text-xs text-primary">{step.n}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read the full architecture <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-card/60 p-10 text-center shadow-card md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.18_55_/_0.2),transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">See it catch a scam in real time</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Try our live scanner with your own suspicious link or email. No signup required.
            </p>
            <a
              href="https://cyberlang-capstone.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-hero px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Launch the Scanner <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
