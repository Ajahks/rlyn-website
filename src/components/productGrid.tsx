import "./css/product.css"
import { Grid2 } from "@mui/material";
import { Product } from "../types/product";
import ProductCard from "./productCard";

interface ProductGridProps {
  onClick: (product: Product) => void;
}

const sampleProducts: Product[] = [
  {
    name: "Bingo Bags", 
    price: "Contact for more info", 
    productCardImg: "/products/bingo-bag/bingo-bag-productCard.png",
    productImgs: [
      "/products/bingo-bag/bingo-bag-productCard.png",
      "/products/bingo-bag/bingo-bag1-productImg.png",
      "/products/bingo-bag/bingo-bag2-productImg.png",
      "/products/bingo-bag/bingo-bag3-productImg.png"
    ],
  },
  {
    name: "Purses", 
    price: "Contact for more info", 
    productCardImg: "/products/purse/purse-productCard.JPG",
    productImgs: [
      "/products/purse/purse-productCard.JPG",
      "/products/purse/purse1-productImg.JPG",
      "/products/purse/purse2-productImg.png",
      "/products/purse/purse3-productImg.png"
    ],
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({onClick}) => {
  return (
    <div className="product-grid">
      <Grid2 container spacing={2}>
        {sampleProducts.map((product) => (
          <Grid2 size={6}>
            <ProductCard product={product} onClick={onClick}/>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ProductGrid;
