import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">CyberLang Analytics</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Hybrid Scam Shield — explainable phishing detection built with formal languages and machine learning.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Overview</Link></li>
            <li><Link to="/how-it-works" className="hover:text-primary">How it Works</Link></li>
            <li><Link to="/about" className="hover:text-primary">About the Team</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Project</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="https://cyberlang-capstone.onrender.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                Live demo ↗
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexWaite03/Capstone_Project" target="_blank" rel="noreferrer" className="hover:text-primary">
                GitHub repo ↗
              </a>
            </li>
            <li className="text-muted-foreground">UWI Capstone · 2026</li>
            <li className="text-muted-foreground">Supervisors: Dr. Curtis Bubsy-Earle, Dr. Sean Miller</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © 2026 CyberLang Analytics. Built for the Caribbean.
      </div>
    </footer>
  );
}
