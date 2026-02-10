import { useParams, Link } from "react-router-dom";
import { MOCK_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, FileText, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();
  const { toast } = useToast();
  const [qty, setQty] = useState(product?.moq || 1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, qty);
    toast({ title: "Added to cart", description: `${qty}x ${product.name}` });
  };

  return (
    <div className="container py-10 md:py-16">
      <Link to="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-muted">
          <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <Badge variant="secondary" className="mb-3 capitalize">{product.category}</Badge>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>

          {product.price && (
            <p className="mt-3 text-2xl font-bold text-primary">
              ${product.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ unit</span>
            </p>
          )}

          <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex gap-2"><span className="font-semibold text-foreground">Clay Type:</span><span className="text-muted-foreground">{product.clayType}</span></div>
            <div className="flex gap-2"><span className="font-semibold text-foreground">Origin:</span><span className="text-muted-foreground">{product.origin}</span></div>
            <div className="flex gap-2"><span className="font-semibold text-foreground">MOQ:</span><span className="text-muted-foreground">{product.moq} units</span></div>
            {product.sizes && (
              <div className="flex gap-2"><span className="font-semibold text-foreground">Sizes:</span><span className="text-muted-foreground">{product.sizes.join(", ")}</span></div>
            )}
            {product.colors && (
              <div className="flex gap-2"><span className="font-semibold text-foreground">Colors:</span><span className="text-muted-foreground">{product.colors.join(", ")}</span></div>
            )}
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <label className="mb-2 block text-sm font-semibold text-foreground">Quantity</label>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" onClick={() => setQty((q) => Math.max(product.moq, q - product.moq))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-16 text-center text-lg font-semibold text-foreground">{qty}</span>
              <Button variant="outline" size="icon" onClick={() => setQty((q) => q + product.moq)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Min. {product.moq} units per order</p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" /> Add to Wholesale Cart
            </Button>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="h-4 w-4" /> Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
