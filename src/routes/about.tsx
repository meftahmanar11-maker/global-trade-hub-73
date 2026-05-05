import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gulf Joy" },
      { name: "description", content: "Gulf Joy is a trusted importer of premium fresh fruits and vegetables — bananas, onions, cantaloupes, peppers, grapes and watermelons." },
      { property: "og:title", content: "About — Gulf Joy" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Freshness First", desc: "Every box is selected, packed and shipped to arrive at peak quality." },
  { title: "Trusted Sourcing", desc: "Long-standing relationships with growers we know and visit personally." },
  { title: "Reliability", desc: "Consistent supply, honest pricing and on-time delivery — every season." },
  { title: "Care for People", desc: "Fair partnerships with farmers and respect for the communities we work with." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">About us</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">Bringing the world's freshest harvest home.</h1>
          <p className="text-lg text-primary-foreground/80">
            Gulf Joy was founded with one simple mission: import the highest-quality fresh produce and deliver it with care.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-5">Our story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gulf Joy was built around a simple love for fresh, honest food. We import premium fruits and
                vegetables — bananas, onions, cantaloupes, peppers, grapes and watermelons — directly from
                growers we know and trust.
              </p>
              <p>
                We work closely with farms and cooperatives across multiple continents, combining careful sourcing
                with modern cold-chain logistics so every shipment arrives crisp, ripe and ready to sell.
              </p>
              <p>
                Whether you're a wholesaler, retailer or food service operator, our team handles every detail —
                from selection at origin to delivery at your door.
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
