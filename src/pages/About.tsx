import { Award, Leaf, Globe, Users } from "lucide-react";

const STORY_POINTS = [
  { icon: Award, title: "Centuries of Craftsmanship", text: "Our artisans carry forward pottery techniques perfected over generations in the historic cities of Safi and Fes." },
  { icon: Leaf, title: "Sustainable Sourcing", text: "We use locally sourced natural clay and eco-friendly glazes, minimizing environmental impact while maximizing quality." },
  { icon: Globe, title: "Global Export Experience", text: "With over a decade of export experience, we ship to 60+ countries, handling logistics, compliance, and customs seamlessly." },
  { icon: Users, title: "Trusted by 500+ Buyers", text: "Distributors, retailers, interior designers, and hospitality brands worldwide trust ArgileMaroc as their clay products partner." },
];

const About = () => (
  <div className="container py-10 md:py-16">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">About ArgileMaroc</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        ArgileMaroc is a wholesale export company specializing in premium Moroccan clay and ceramic products. We bridge the gap between Morocco's rich artisan heritage and the global marketplace, delivering handcrafted excellence to businesses worldwide.
      </p>
    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {STORY_POINTS.map((s) => (
        <div key={s.title} className="rounded-lg border border-border bg-card p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <s.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center md:p-12">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our Mission</h2>
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        To share the beauty and authenticity of Moroccan clay craftsmanship with the world, while empowering local artisan communities and promoting sustainable manufacturing practices. Every piece tells a story — of earth, fire, and human artistry.
      </p>
    </div>
  </div>
);

export default About;
