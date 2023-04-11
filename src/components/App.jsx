import { Route, Routes } from 'react-router-dom';
import {Home} from './../pages/Home';
import {ProductInfo} from './../pages/ProductInfo';
import {Contact} from './../pages/Contact';
import {About} from './../pages/About';
import {Error} from './../pages/Error';
import { PreAuth } from './../pages/PreAuth';
import { Login } from './../pages/auth/Login';
import { Register } from './../pages/auth/Register';
import { Cart } from './../pages/Cart';
import { ListProducts } from './../pages/ListProducts';
import { Calendar } from './../pages/buyProduct/setDate';
import { Alquiler } from './../pages/Alquiler';


export function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productInfo/:productId" element={<ProductInfo />} />
          <Route path="/setDate" element={<Calendar />} />
          <Route path="/listProducts/:productsSearch" element={<ListProducts />} />
          <Route path="/alquiler/:typeID" element={<Alquiler />} />
          {/* Posible enlace para tipo de producto */}
          <Route path='/preAuth' element={<PreAuth />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Routes>
  );
}

