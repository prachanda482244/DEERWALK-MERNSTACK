import './App.css';
import Navbar from './Components/Navbar'
import Product from './Components/Product';

function App() {
  let products = {
    name: 'Dell E5300 laptop',
    price: 80000,
    quantity: 5
  }
  let { name, price, quantity } = products
  return (
    <>
      <Navbar />
      <Product productName={name} productPrice={price} productQuantity={quantity} />
    </>
  );
}

export default App;
