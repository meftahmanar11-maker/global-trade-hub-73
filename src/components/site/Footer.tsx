import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-primary-foreground mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-display text-2xl font-bold text-secondary">GlobalReach</div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Connecting businesses to global markets with reliable import &amp; export logistics.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Sea Freight</li>
            <li>Air Freight</li>
            <li>Customs Clearance</li>
            <li>Warehousing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>123 Harbor Avenue</li>
            <li>Port District, 10001</li>
            <li>info@globalreach.co</li>
            <li>+1 (555) 010-2030</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} GlobalReach Trading Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
