import { Link } from "react-router-dom";
import { navLinks } from "../data/siteContent";

function Footer() {
  return (
    <footer className="border-t border-bm-border bg-bm-surface">
      <div className="bm-container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-white">BuildMind</h3>
          <p className="mt-3 max-w-sm text-sm text-bm-muted">
            AI-powered construction operations — projects, workforce, materials, equipment, and
            finance in one platform built for the field.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["SOC2-ready", "Role-based access", "Multi-site"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-bm-border bg-bm-card px-3 py-1 text-xs text-bm-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-bm-text">Explore</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-bm-muted transition hover:text-bm-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/request-demo"
                className="text-sm text-bm-muted transition hover:text-bm-accent"
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-bm-text">Contact</h4>
          <p className="mt-4 text-sm text-bm-muted">ssairabatool98@gmail.com</p>
          <p className="text-sm text-bm-muted">+92 34800000</p>
          <p className="mt-4 text-sm text-bm-muted">
            145 Innovation Drive, Mobility District
            <br />
            Skardu, Pakistan
          </p>
        </div>
      </div>
      <p className="border-t border-bm-border py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} BuildMind. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
