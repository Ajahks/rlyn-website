import { useState } from "react";
import ProductGrid from "../components/productGrid";
import { Product } from "../types/product";
import ProductModal from "../components/productModal";

const homeStyle: React.CSSProperties = {
  backgroundColor: '#E6E8E6',
  color: '#213547',
  borderRadius: '20px',
  paddingTop: '20px',
  paddingBottom: '20px',
  paddingLeft: '30px',
  paddingRight: '30px',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#E6E8E6',
  color: '#213547',
  borderRadius: '20px',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  margin: '10px',
};

const verticalLinksStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1px',
}

const linkStyle: React.CSSProperties = {
  color: '#907AD6',
  margin: '5px',
  fontSize: '16px'
};



export function HomePage() {
  const [selectedProduct, selectProduct] = useState<Product|null>(null);

  function handleProductClick(product: Product) {
    // Set a variable
    selectProduct(product);
  }

  function handleModalClose() {
    selectProduct(null);
  }

  return (
    <>
      <ProductModal product={selectedProduct} onClose={handleModalClose}/>
      <div style={ homeStyle }>
        <h1>Welcome to Rlyn's shop!</h1>
        <p>For inquiries, please contact:</p>
        <div style={verticalLinksStyle}>
          <a style={linkStyle} href="mailto:Pelagias.pride24@gmail.com">Pelagias.pride24@gmail.com</a>
          <a style={linkStyle} href="tel:9255921928">925-592-1928</a>
        </div>
      </div>
      <h2 style={headerStyle}>Products</h2>
      <ProductGrid onClick={handleProductClick}/>
    </>
  );
}

