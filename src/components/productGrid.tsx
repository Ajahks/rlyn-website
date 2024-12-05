import "./css/product.css"
import { Grid2 } from "@mui/material";
import { Product } from "../types/product";
import ProductCard from "./productCard";
import {products} from "../data/products.tsx";

interface ProductGridProps {
  onClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({onClick}) => {
  return (
    <div className="product-grid">
      <Grid2 container spacing={2}>
        {products.map((product) => (
          <Grid2 size={6}>
            <ProductCard product={product} onClick={onClick}/>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ProductGrid;
