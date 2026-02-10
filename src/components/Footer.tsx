import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-xl font-bold text-primary">
            Argile<span className="text-accent">Maroc</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Premium Moroccan clay & ceramic products for wholesale export. Handcrafted with centuries of tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/request-quote", label: "Request Quote" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Tagines", "Bowls & Plates", "Vases", "Zellige Tiles", "Decorative"].map((c) => (
              <li key={c}>
                <Link to="/products" className="transition-colors hover:text-primary">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Safi, Morocco</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:export@argilemaroc.com" className="hover:text-primary">export@argilemaroc.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+212600000000" className="hover:text-primary">+212 600 000 000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ArgileMaroc. All rights reserved. Premium Moroccan Clay & Ceramics for Global Export.
      </div>
    </div>
  </footer>
);

export default Footer;
