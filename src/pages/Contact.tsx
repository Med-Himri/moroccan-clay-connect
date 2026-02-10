import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "export@argilemaroc.com", href: "mailto:export@argilemaroc.com" },
  { icon: Phone, label: "Phone", value: "+212 600 000 000", href: "tel:+212600000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+212 600 000 000", href: "https://wa.me/212600000000" },
  { icon: MapPin, label: "Location", value: "Safi, Morocco" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent", description: "We'll respond within 24 hours." });
      setLoading(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="container py-10 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">Get in touch with our wholesale team</p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        {/* Info */}
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground">Reach Out</h2>
          <p className="mt-2 text-sm text-muted-foreground">We're available for wholesale inquiries, custom orders, and partnership opportunities.</p>
          <div className="mt-6 space-y-4">
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">{c.value}</a>
                  ) : (
                    <p className="text-sm text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
