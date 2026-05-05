import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Products — Gulf Joy" },
      { name: "description", content: "Premium imported bananas, onions, cantaloupes, peppers, grapes and watermelons from Gulf Joy." },
      { property: "og:title", content: "Products — Gulf Joy" },
      { property: "og:description", content: "Explore the fresh produce we import: bananas, onions, cantaloupes, peppers, grapes and watermelons." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    emoji: "🍌",
    title: "Bananas",
    desc: "Premium Cavendish bananas, harvested green and shipped under controlled ripening for perfect arrival color and sweetness.",
    points: ["Cavendish variety", "Cold-chain shipping", "Retail & wholesale packs"],
  },
  {
    emoji: "🧅",
    title: "Onions",
    desc: "Yellow, red and white onions selected for firmness, flavor and long shelf life — graded and sized for export markets.",
    points: ["Yellow / Red / White", "Multiple size grades", "Mesh bags or cartons"],
  },
  {
    emoji: "🍈",
    title: "Cantaloupes",
    desc: "Aromatic cantaloupe melons picked at peak ripeness with thick netting and dense, juicy flesh.",
    points: ["Net-skin variety", "Peak-ripeness harvest", "Export-grade cartons"],
  },
  {
    emoji: "🫑",
    title: "Bell Peppers",
    desc: "Crisp, glossy bell peppers in red, yellow and green — graded for color, size and uniformity.",
    points: ["Red / Yellow / Green", "Premium & standard grades", "Vented cartons"],
  },
  {
    emoji: "🍇",
    title: "Grapes",
    desc: "Sweet seedless table grapes with full berry size and excellent shelf life — packed in clamshells or bulk.",
    points: ["Seedless varieties", "Clamshell or bulk", "Refrigerated transport"],
  },
  {
    emoji: "🍉",
    title: "Watermelons",
    desc: "Sweet, refreshing watermelons with deep red flesh — available in seeded and seedless varieties.",
    points: ["Seeded / Seedless", "Bin or carton pack", "Year-round sourcing"],
  },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Products</p>
          <h1 className="text-5xl font-display font-bold text-balance mb-5">Fresh fruits & vegetables, sourced worldwide.</h1>
          <p className="text-lg text-primary-foreground's/80 text-primary-foreground/80">
            From a single pallet to full container loads — Gulf Joy delivers premium-quality produce, year-round.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="p-8 bg-card text-card-foreground rounded-2xl border border-border hover:shadow-elegant transition-shadow">
                <div className="h-16 w-16 rounded-xl bg-brand/10 flex items-center justify-center mb-5 text-4xl">
                  {p.emoji}
                </div>
                <h2 className="text-2xl font-display font-bold mb-3">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {pt}
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
