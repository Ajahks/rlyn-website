import ProductGrid from "../components/productGrid";

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

export function HomePage() {
  return (
    <>
      <div style={ homeStyle }>
        <h1>Welcome to Rlyn's shop!</h1>
        <p>This shop is still under construction.</p>
        <p>For inquiries, please contact Pelagias.pride24@gmail.com</p>
      </div>
      <h2 style={headerStyle}>Products</h2>
      <ProductGrid/>
    </>
  );
}

