import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it Works — Hybrid Scam Shield | CyberLang Analytics" },
      { name: "description", content: "Inside the hybrid pipeline: regex, NFA, DFA, feature engineering, and machine learning — combined for explainable phishing detection." },
      { property: "og:title", content: "How Hybrid Scam Shield Works" },
      { property: "og:description", content: "Regex → NFA → DFA → ML. The architecture behind explainable phishing detection." },
    ],
  }),
  component: HowItWorks,
});

const layers = [
  {
    n: "01",
    title: "Input Layer",
    sub: "Where it starts",
    body: "Users paste a URL or email text into the web app — or flag one through our Chrome extension. The input is normalised (lowercased, tokenised, cleaned) before anything else runs.",
    code: "POST /scan\n{ \"type\": \"url\", \"value\": \"...\" }",
  },
  {
    n: "02",
    title: "Formal Language Layer",
    sub: "Theory of Computation, applied",
    body: "We define phishing as a formal language. Hand-crafted regex patterns describe scam structures (lookalike brands, IP hosts, punycode, deep subdomains, credential keywords). Each regex compiles into an NFA, then a deterministic DFA for fast, predictable matching.",
    code: "Regex  →  NFA  →  DFA  →  match trace",
  },
  {
    n: "03",
    title: "Feature Engineering Layer",
    sub: "Structure meets statistics",
    body: "Every input becomes a feature vector: which automata matched, how deeply, plus classic signals — URL length, digit ratio, character entropy, keyword frequency, subject-line caps ratio.",
    code: "[match_URL01=1, depth=4, entropy=4.7, kw_login=2, ...]",
  },
  {
    n: "04",
    title: "Machine Learning Layer",
    sub: "Probabilistic decision",
    body: "Logistic regression and random forest classifiers — trained on PhishTank and Kaggle datasets — turn the feature vector into a confidence score. ML handles edge cases the rules don't catch.",
    code: "P(phishing) = 0.97",
  },
  {
    n: "05",
    title: "Presentation Layer",
    sub: "Why, not just what",
    body: "The verdict ships with the matched rules, the substring that triggered each one, and the model's confidence. You don't just see “phishing” — you see the evidence.",
    code: "verdict: PHISHING\nrules: [URL-04, URL-08, EMAIL-03]",
  },
];

function HowItWorks() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.18_55_/_0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">How it works</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            From <span className="text-gradient">regex</span> to verdict, in five layers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Each layer of Hybrid Scam Shield builds on the last. Formal rules give us
            transparency; machine learning gives us reach. Together, they catch more —
            and explain more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-16">
          {layers.map((l, i) => (
            <div key={l.n} className="grid gap-8 md:grid-cols-[120px_1fr] md:gap-12">
              <div className="md:text-right">
                <p className="font-mono text-sm text-primary">{l.n}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {l.sub}
                </p>
              </div>
              <div className="relative border-l border-border-strong pl-8">
                <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gradient-hero shadow-glow" />
                <h2 className="font-display text-2xl font-bold md:text-3xl">{l.title}</h2>
                <p className="mt-3 text-muted-foreground">{l.body}</p>
                <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-xs text-foreground/90">
                  {l.code}
                </pre>
                {i < layers.length - 1 && (
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="h-px w-8 bg-border-strong" /> next layer
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-border-strong bg-card/60 p-10 shadow-card">
          <h2 className="font-display text-2xl font-bold">Example: a real scan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Here's what happens when you submit a suspicious URL.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <pre className="rounded-lg border border-border bg-background/80 p-5 font-mono text-xs">
{`Input
  https://paypa1-verify-
  account.tk/login

Automata trace
  ✓ URL-04 brand lookalike
  ✓ URL-08 suspicious TLD (.tk)
  ✓ URL-11 deep subdomain

Features
  url_len = 41
  digit_ratio = 0.07
  has_login_kw = 1
  match_count = 3`}
            </pre>
            <pre className="rounded-lg border border-border bg-background/80 p-5 font-mono text-xs">
{`ML score
  random_forest = 0.97

Verdict
  ⚠ PHISHING

Why
  Brand "paypal" written as
  "paypa1" on a free TLD with
  a credential-harvest path.
  3 formal rules + ML agree.`}
            </pre>
          </div>
          <a
            href="https://cyberlang-capstone.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Try it yourself <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
