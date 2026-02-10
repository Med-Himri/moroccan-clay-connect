import { Link } from "react-router-dom";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    {/* Image */}
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-4">
      <Badge variant="secondary" className="mb-2 text-xs capitalize">
        {product.category}
      </Badge>
      <h3 className="font-serif text-lg font-semibold leading-tight text-foreground line-clamp-2">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">MOQ: {product.moq} units</p>
      {product.price && (
        <p className="mt-1 text-sm font-semibold text-primary">
          From ${product.price.toFixed(2)} / unit
        </p>
      )}
      <Link to={`/products/${product.id}`} className="mt-3 block">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </Link>
    </div>
  </div>
);

export default ProductCard;
