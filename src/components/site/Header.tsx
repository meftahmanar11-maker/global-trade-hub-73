import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand/95 backdrop-blur supports-[backdrop-filter]:bg-brand/80 text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-accent text-brand-deep font-display font-bold">
            G
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            GlobalReach
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
              activeProps={{ className: "text-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="hero" size="sm">
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </div>
    </header>
  );
}
