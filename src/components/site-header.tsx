import { Link } from "@tanstack/react-router";
import logo from "@/assets/cyberLangLogo.png";

const links = [
  { to: "/", label: "Overview" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center">
            <img src={logo} alt="CyberLang Analytics logo" className="h-20 w-20 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight">CyberLang Analytics</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Hybrid Scam Shield</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://cyberlang-capstone.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-md bg-gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Try the Demo
          </a>
        </nav>
      </div>
      <div className="accent-line" />
    </header>
  );
}
