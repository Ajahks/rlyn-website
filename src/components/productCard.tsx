import './css/product.css'
import { Product } from "../types/product";
import { Box } from '@mui/material';


interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({product, onClick}) => {
  function handleOnClick() {
    onClick(product)
  }

  return (
    <div className="product-card" onClick={handleOnClick}>
        <h2>{product.name}</h2>
        <p style={{whiteSpace: "pre-line"}}>{product.shortDescription}</p>
        <p>{product.price}</p>
        <Box
          component="img"
          src={product.productCardImg}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Scales the image while maintaining aspect ratio
            borderRadius: 1, // Optional: rounds corners
          }}
        />
    </div>
  );
};

export default ProductCard;

