import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck2, Warehouse, Globe2, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/hero-cargo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlobalReach — Connecting Your Business to the World" },
      { name: "description", content: "International import & export logistics: sea freight, air freight, customs clearance, and supply chain management." },
      { property: "og:title", content: "GlobalReach — Connecting Your Business to the World" },
      { property: "og:description", content: "Reliable import & export logistics for global businesses." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Ship, title: "Sea Freight", desc: "Cost-effective FCL & LCL shipping across all major trade lanes." },
  { icon: Plane, title: "Air Freight", desc: "Time-critical cargo delivered with priority handling worldwide." },
  { icon: FileCheck2, title: "Customs Clearance", desc: "Expert brokerage to keep your shipments compliant and moving." },
  { icon: Warehouse, title: "Warehousing", desc: "Strategic storage and distribution from bonded facilities." },
];

const stats = [
  { value: "120+", label: "Countries served" },
  { value: "15K", label: "Shipments / year" },
  { value: "98%", label: "On-time delivery" },
  { value: "24/7", label: "Live support" },
];

const why = [
  { icon: Globe2, title: "Global Network", desc: "Partners and agents in every major port and trade hub worldwide." },
  { icon: ShieldCheck, title: "Trusted & Compliant", desc: "Full documentation, insurance, and regulatory expertise." },
  { icon: Clock, title: "On-Time, Every Time", desc: "Real-time tracking and proactive communication on every shipment." },
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
                International trade made simple
              </span>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-balance">
                Connecting your business <span className="text-secondary">to the world.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Seamless import &amp; export logistics — from sourcing to last-mile delivery.
                We simplify global trade so you can focus on growing your business.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="hero" size="lg">
                  <Link to="/services">Explore Services</Link>
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
                alt="Container ship at sea carrying international cargo"
                width={1600}
                height={1024}
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

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">What we do</p>
            <h2 className="text-4xl font-display font-bold text-balance">Comprehensive global trade solutions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group p-7 bg-card text-card-foreground rounded-2xl border border-border hover:border-brand/30 hover:shadow-elegant transition-all">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-brand font-semibold mb-3">Why GlobalReach</p>
            <h2 className="text-4xl font-display font-bold text-balance mb-5">A logistics partner you can build on.</h2>
            <p className="text-muted-foreground leading-relaxed">
              For over a decade we've helped manufacturers, distributors and retailers move goods across borders —
              with the network, the expertise, and the technology to make it effortless.
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
              Ready to streamline your global trade?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Get a tailored quote in 24 hours. No obligation, just clear pricing.
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
