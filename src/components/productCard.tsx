import './css/product.css'
import { Product } from "../types/product";
import { Box } from '@mui/material';


interface ProductCardProps {
  product: Product   
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <div className="product-card">
        <h2>{product.name}</h2> 
        <Box
          component="img"
          src={product.imageUrl}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Scales the image while maintaining aspect ratio
            borderRadius: 1, // Optional: rounds corners
          }}
        />
        <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;

