import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-primary-foreground mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-display text-2xl font-bold text-secondary">Gulf Joy</div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Importing the freshest fruits and vegetables from trusted growers around the world.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Products</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Bananas</li>
            <li>Onions</li>
            <li>Cantaloupes</li>
            <li>Peppers</li>
            <li>Grapes</li>
            <li>Watermelons</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Gulf Joy Trading</li>
            <li>golfjoy01@gmail.com</li>
            <li>+216 70 287 161</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} Gulf Joy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
