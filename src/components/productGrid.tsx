import "./css/product.css"
import { Grid2 } from "@mui/material";
import { Product } from "../types/product";
import ProductCard from "./productCard";

const sampleProducts: Product[] = [
  {name: "Bingo Bags", price: "Contact to for more info", imageUrl: "/bingo-bag-productCard.png"},
];

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid">
      <Grid2 container spacing={2}>
        {sampleProducts.map((product) => (
          <Grid2 size={6}>
            <ProductCard product={product}/>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ProductGrid;
