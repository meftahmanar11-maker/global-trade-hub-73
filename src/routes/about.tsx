import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GlobalReach" },
      { name: "description", content: "Learn about GlobalReach — a trusted international logistics and trading partner serving 120+ countries." },
      { property: "og:title", content: "About — GlobalReach" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Reliability", desc: "We do what we say. Every shipment, every customer, every time." },
  { title: "Transparency", desc: "Clear pricing, real-time tracking and honest communication." },
  { title: "Expertise", desc: "Decades of combined experience navigating global trade complexity." },
  { title: "Partnership", desc: "We treat your business like our own — long-term, not transactional." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">About us</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">A decade of moving the world's goods.</h1>
          <p className="text-lg text-primary-foreground/80">
            GlobalReach was founded with one simple mission: make international trade effortless for businesses of every size.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-5">Our story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded over a decade ago by a team of seasoned freight forwarders and customs experts,
                GlobalReach has grown into a trusted partner for importers and exporters across 120+ countries.
              </p>
              <p>
                We combine deep regional expertise with a global agent network to deliver shipments that arrive
                on time, in compliance, and at the right cost.
              </p>
              <p>
                Today, our team of more than 200 logistics professionals handles thousands of shipments every
                month — from a single pallet of specialty goods to multi-vessel industrial projects.
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-6">Our values</h3>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-semibold mb-1">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">Let's move your business forward.</h2>
          <p className="text-muted-foreground mb-8">Talk to our team about your next shipment or supply chain project.</p>
          <Button asChild variant="default" size="lg">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
