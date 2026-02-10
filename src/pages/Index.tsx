import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Package, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-moroccan-clay.jpg";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, MOCK_PRODUCTS } from "@/data/products";

const FEATURES = [
  { icon: Shield, title: "Export Quality", desc: "All products meet international export standards and certifications." },
  { icon: Package, title: "Bulk Pricing", desc: "Competitive wholesale pricing with flexible MOQ for every product." },
  { icon: Truck, title: "Worldwide Shipping", desc: "Reliable logistics and shipping to over 60 countries." },
  { icon: Globe, title: "Global Network", desc: "Trusted by 500+ distributors, retailers, and designers worldwide." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Moroccan clay products" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="container relative z-10 flex min-h-[85vh] items-center py-20 md:min-h-[90vh]">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Premium Moroccan Clay Products
          </h1>
          <p className="mt-2 font-serif text-xl text-primary md:text-2xl">
            Wholesale & Export
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Handcrafted, eco-friendly clay & ceramic products rooted in centuries of Moroccan artisan heritage. Direct from workshop to your warehouse.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products">
              <Button size="lg" className="gap-2 text-base">
                Browse Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-base text-primary-foreground hover:bg-primary-foreground/10">
                Request Wholesale Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="container py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Product Categories</h2>
        <p className="mt-2 text-muted-foreground">Explore our curated range of Moroccan clay & ceramic products</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary">{cat.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="bg-card py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Products</h2>
          <p className="mt-2 text-muted-foreground">Best sellers & new arrivals for wholesale buyers</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg" className="gap-2">
              View All Products <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="container py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose ArgileMaroc</h2>
        <p className="mt-2 text-muted-foreground">Your trusted partner for Moroccan clay exports</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 text-center md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Partner With Us?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Get competitive wholesale pricing, reliable shipping, and premium Moroccan craftsmanship for your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/request-quote">
            <Button size="lg" variant="secondary" className="text-base">
              Request a Quote
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-base text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
