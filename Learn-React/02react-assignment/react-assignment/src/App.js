import './App.css';
import Navbar from './Components/Navbar'
import Product from './Assignments/Assignment1/Product'
import Map from './Assignments/Assignment2/Map'
import Counter from './Assignments/Assignment3/Counter'

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
      {/* Assignment 1  */}

      <Product productName={name} productPrice={price} productQuantity={quantity} />
      {/* Assignment 2 */}
      <Map />
      {/* Assignment 3 */}
      <Counter />
    </>
  );
}

export default App;

