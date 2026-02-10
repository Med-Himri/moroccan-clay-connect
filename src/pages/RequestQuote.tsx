import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";

const RequestQuote = () => {
  const { items, totalPrice } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: "", country: "", shippingAddress: "", phone: "", email: "", notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Quote Submitted", description: "We'll get back to you within 24 hours." });
      setLoading(false);
    }, 1000);
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <div className="container py-10 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <FileText className="mx-auto mb-3 h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Request a Wholesale Quote</h1>
          <p className="mt-2 text-muted-foreground">Fill in your details and we'll prepare a custom wholesale offer.</p>
        </div>

        {items.length > 0 && (
          <div className="mb-8 rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold text-foreground">Cart Items ({items.length})</h3>
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm text-muted-foreground">
                <span>{item.product.name}</span>
                <span>{item.quantity} units</span>
              </div>
            ))}
            <div className="mt-2 border-t border-border pt-2 text-sm font-semibold text-foreground">
              Estimated: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input id="companyName" value={form.companyName} onChange={(e) => update("companyName", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Input id="country" value={form.country} onChange={(e) => update("country", e.target.value)} required />
            </div>
          </div>
          <div>
            <Label htmlFor="shippingAddress">Shipping Address *</Label>
            <Input id="shippingAddress" value={form.shippingAddress} onChange={(e) => update("shippingAddress", e.target.value)} required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Notes / Custom Orders</Label>
            <Textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={4} placeholder="Any special requirements, custom sizes, branding needs..." />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Quote Request"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
