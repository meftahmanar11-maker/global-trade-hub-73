import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Leaf, Truck, ShieldCheck, Globe2, Snowflake, Clock } from "lucide-react";
import heroImg from "@/assets/hero-produce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gulf Joy — Premium Fresh Produce Importer" },
      { name: "description", content: "Gulf Joy imports premium-quality bananas, onions, cantaloupes, peppers, grapes and watermelons from trusted growers worldwide." },
      { property: "og:title", content: "Gulf Joy — Premium Fresh Produce Importer" },
      { property: "og:description", content: "Premium fresh fruits and vegetables, delivered straight from the world's best growers." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const products = [
  { emoji: "🍌", title: "Bananas", desc: "Sweet, ripe Cavendish bananas sourced from premium plantations." },
  { emoji: "🧅", title: "Onions", desc: "Yellow, red and white onions — firm, flavorful and long-lasting." },
  { emoji: "🍈", title: "Cantaloupes", desc: "Aromatic, juicy melons picked at peak ripeness." },
  { emoji: "🫑", title: "Peppers", desc: "Crisp bell peppers in vibrant red, yellow and green." },
  { emoji: "🍇", title: "Grapes", desc: "Seedless table grapes — sweet, plump and perfectly fresh." },
  { emoji: "🍉", title: "Watermelons", desc: "Refreshing, sweet watermelons with deep red flesh." },
];

const stats = [
  { value: "6+", label: "Premium products" },
  { value: "20+", label: "Sourcing countries" },
  { value: "98%", label: "Fresh on arrival" },
  { value: "24/7", label: "Logistics support" },
];

const why = [
  { icon: Leaf, title: "Farm-Fresh Quality", desc: "Hand-picked from trusted growers and inspected at every step." },
  { icon: Snowflake, title: "Cold Chain Logistics", desc: "Temperature-controlled shipping preserves freshness from farm to port." },
  { icon: ShieldCheck, title: "Certified & Compliant", desc: "Full phytosanitary documentation and food-safety standards." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.16_85_/_0.4),transparent_50%)]" />
        <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Premium fresh produce importer
              </span>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-balance">
                Bringing the world's <span className="text-secondary">freshest harvest</span> to your market.
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Gulf Joy imports premium bananas, onions, cantaloupes, peppers, grapes and watermelons —
                sourced from trusted growers and delivered with care.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="hero" size="lg">
                  <Link to="/services">Our Products</Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-secondary/30" />
              <img
                src={heroImg}
                alt="Assortment of fresh imported fruits and vegetables — bananas, onions, cantaloupes, peppers, grapes, watermelons"
                width={1600}
                height={1200}
                className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-elegant"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-secondary">{s.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">Our products</p>
            <h2 className="text-4xl font-display font-bold text-balance">Fresh fruits & vegetables, year-round.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="group p-7 bg-card text-card-foreground rounded-2xl border border-border hover:border-brand/30 hover:shadow-elegant transition-all">
                <div className="h-14 w-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-3xl">
                  {p.emoji}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">Why Gulf Joy</p>
            <h2 className="text-4xl font-display font-bold text-balance mb-5">Freshness you can trust, every shipment.</h2>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with farms and cooperatives around the world, combining careful sourcing
              with modern cold-chain logistics to deliver produce that arrives crisp, ripe and ready to sell.
            </p>
            <Button asChild className="mt-8" variant="default" size="lg">
              <Link to="/about">About our company</Link>
            </Button>
          </div>
          <div className="space-y-6">
            {why.map((w) => (
              <div key={w.title} className="flex gap-5">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary/20 text-brand flex items-center justify-center">
                  <w.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-1">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-gradient-hero text-primary-foreground rounded-3xl p-12 lg:p-16 text-center shadow-elegant">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              Ready to stock the freshest produce?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Tell us what you need — we'll send pricing, availability and shipping details within 24 hours.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
