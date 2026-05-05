import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck2, Warehouse, Truck, PackageSearch } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GlobalReach" },
      { name: "description", content: "Sea freight, air freight, customs clearance, warehousing, and end-to-end supply chain solutions." },
      { property: "og:title", content: "Services — GlobalReach" },
      { property: "og:description", content: "Full-service international logistics for importers and exporters." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Ship, title: "Sea Freight", desc: "Full container (FCL) and less-than-container (LCL) ocean freight on all major routes, with door-to-door options.", points: ["FCL & LCL", "Reefer & special cargo", "Port-to-door"] },
  { icon: Plane, title: "Air Freight", desc: "Express and standard air cargo with consolidated and direct service for time-sensitive shipments.", points: ["Express service", "Charter options", "Pharma & perishables"] },
  { icon: FileCheck2, title: "Customs Clearance", desc: "Licensed customs brokerage handling documentation, duties, classification and compliance worldwide.", points: ["HS classification", "Duty optimization", "Trade compliance"] },
  { icon: Warehouse, title: "Warehousing", desc: "Bonded and non-bonded warehousing with pick-and-pack, inventory and fulfillment services.", points: ["Bonded storage", "Pick & pack", "Inventory mgmt"] },
  { icon: Truck, title: "Inland Transport", desc: "Reliable trucking and rail solutions connecting ports, warehouses and your final destination.", points: ["FTL & LTL", "Cross-border", "Last mile"] },
  { icon: PackageSearch, title: "Supply Chain Consulting", desc: "Optimize sourcing, routing and inventory for cost savings and resilience across your supply chain.", points: ["Route optimization", "Cost analysis", "Risk mitigation"] },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Services</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">End-to-end logistics for global trade.</h1>
          <p className="text-lg text-primary-foreground/80">
            From a single shipment to a fully managed supply chain — we deliver the expertise, network and technology to keep your goods moving.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="p-8 bg-card text-card-foreground rounded-2xl border border-border hover:shadow-elegant transition-shadow">
                <div className="h-14 w-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="default" size="lg">
              <Link to="/contact">Request a custom quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
