import { Box, Modal } from "@mui/material";
import { Product } from "../types/product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void,
}

const modalContentStyle = {
  position: 'absolute',
  top: '7.5%',
  left: '2.5%',
  right: '2.5%',
  bottom: '7.5%',
  bgcolor: '#E6E8E6',
  display: 'flex',
  borderRadius: 2,
  overflow: 'auto', // allows scrolling
  textAlign: 'center',
};

const modalImageStyle = {
  maxWidth: '95%',
  maxHeight: '80%',
  margin: '10px',
  objectFit: 'contain', // Scales the image while maintaining aspect ratio
  borderRadius: 1, // Optional: rounds corners
}

const ProductModal: React.FC<ProductModalProps> = ({product, onClose}) => {
  return (
    <Modal
      open={product != null}
      onClose={onClose}
    >
      <Box sx={modalContentStyle}>
        { product ? 
          (
            <div>
              <h1>{product.name}</h1>
              {product.productImgs.map((img) => {
                return ( 
                  <Box
                    component="img"
                    src={img}
                    sx={modalImageStyle}
                  />
                );
              })}
            </div>
          ) : (
            <h1>No Product Found</h1>
          )
        }
      </Box>
    </Modal>
  );
}

export default ProductModal;

