import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-muted-foreground/40" />
        <h1 className="text-2xl font-bold text-foreground">Your Wholesale Cart is Empty</h1>
        <p className="mt-2 text-muted-foreground">Browse our products and add items to your cart.</p>
        <Link to="/products" className="mt-6 inline-block">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 md:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Wholesale Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 rounded-lg border border-border bg-card p-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-foreground">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">MOQ: {item.product.moq} units</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - item.product.moq)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center text-sm font-semibold">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + item.product.moq)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.product.price && (
                      <span className="font-semibold text-primary">${(item.product.price * item.quantity).toFixed(2)}</span>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeItem(item.product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-bold text-foreground">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Items</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Estimated Total</span>
              <span className="font-semibold text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Final pricing confirmed upon quote approval. Shipping calculated separately.</p>
          <Link to="/request-quote" className="mt-6 block">
            <Button className="w-full gap-2">
              Proceed to Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="mt-2 w-full text-muted-foreground" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
