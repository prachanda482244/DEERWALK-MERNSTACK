import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Register from './Components/Register';
import Admin from './Admin/Admin';
import Customer from './Customer/Customer';
import CreateProduct from './Customer/CreateProduct';
import Home from './Components/Home';
import ShowAllProducts from './Customer/ShowAllProducts';
import ShowOneProduct from './Customer/ShowOneProduct';
import UpdateProduct from './Customer/UpdateProduct';

function App() {
  return (
    <div className='bg-[#ffffff]'>
      {/* /products */}
      {/* /products/create */}

      {/* Q61   make a route using nesiting route
a) localhost:3000/admin/products
b)localjhost:3000/admin/products/create
c)localhost:3000/admin/products/update
c)localhost:3000/customer/products/
c)localhost:3000/customer/products/create
c)localhost:3000/customer/products/update (edited)
 create a products (using api at axious.txt file)
Q63 get all products (using api at axious.txt file) (edited)
     Note Q62 and Q63 is aready done at my file you can take refrence  */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path='admin' element={<Outlet />} >
            <Route index element={<Admin />}></Route>
            <Route path='products' element={<Outlet />} >
              <Route index element='Product page' />
              <Route path='create' element='Create' />
              <Route path='update' element="Update page" />
              <Route path='show' element="Sho product page" />
            </Route>
          </Route>

          <Route path='customer' element={<Outlet />} >
            <Route index element={<Customer />} />
            <Route path='products' element={<Outlet />} >
              <Route path='view' element={<ShowAllProducts />} />
              <Route path=':id' element={<ShowOneProduct />} />
              <Route path='create' element={<CreateProduct />} />
              <Route path='update/:id' element={<UpdateProduct />} />
            </Route>
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
