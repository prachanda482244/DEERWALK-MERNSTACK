import './App.css';
import Navbar from './Components/Navbar'
import Product from './Assignments/Assignment1/Product'
import Map from './Assignments/Assignment2/Map'
import Counter from './Assignments/Assignment3/Counter'
import ProductChange from './Assignments/Assignment4/ProductChange';
import ChangeTitle from './Assignments/Assignment5/ChangeTitle';
// import HideShow from './Assignments/Assignment6/HideShow';
import { Routes, Route } from 'react-router-dom'
import Routing from './Assignments/Assignment-routing/Routing';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Service from './Components/Service';
import Ourproduct from './Components/Products/Ourproduct';
import Userdetails from './Components/Products/Userdetails';
import UseSearchParams from './Components/Products/UseSearchParams';
import ProductId from './Components/Products/ProductId';

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
      <Routes>
        {/* Basic route */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Nested routing */}
        <Route path='/service/' element={<Service />}>
          <Route path='productDetails' element={<Ourproduct />} />
          <Route path='productDetails/:productId' element={<ProductId />} />
          <Route path='userDetails' element={<Userdetails />} />
          <Route path='usesearchParams' element={<UseSearchParams />} />
        </Route>

        {/* Error route */}
        <Route path="*" element={<Home />} />

        {/* Assignment Route */}
        <Route
          path='/assignment1' element={<Product productName={name} productPrice={price} productQuantity={quantity} />}
        />
        {/* Assignment 2 */}
        <Route path='/assignment2' element={<Map />} />

        {/* Assignment 3 */}
        <Route path='/assignment3' element={<Counter />} />
        {/* Assignment 4 */}
        <Route path='/assignment4' element={<ProductChange productName={name} productPrice={price} productQuantity={quantity} />} />

        {/* Assignmeny 5  */}
        <Route path='/assignment5' element={<ChangeTitle />} />

        {/* Assignment 6 */}
        {/* <HideShow /> */}

        {/* ROuting assignment */}
        <Route path='/routing-assignment' element={<Routing />} />
      </Routes>
    </>
  );
}

export default App;

