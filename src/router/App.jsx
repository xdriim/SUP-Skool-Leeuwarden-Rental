import { Route, Routes } from 'react-router-dom';
import {Home} from '../pages/Home';
import {ProductInfo} from '../pages/ProductInfo';
import {Contact} from '../pages/Contact';
import {About} from '../pages/About';
import {Error} from '../pages/Error';

import { PreAuth } from '../pages/PreAuth';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';

import { Cart } from '../pages/Cart';
import { ListProducts } from '../pages/ListProducts';
import { Alquiler } from '../pages/Alquiler';

import { Datos } from './../pages/auth/profile/Datos';
import { Reservas } from './../pages/auth/profile/Reservas';
import { Historial } from './../pages/auth/profile/Historial';
import { GenerateHeader } from '../components/sections/Header';
import { GenerateFooter } from '../components/sections/Footer';

import { Calendar } from '../pages/buyProduct/pages/setDate';
import { InfoBuyer } from '../pages/buyProduct/pages/InfoBuyer';
import { UserForm } from '../pages/buyProduct/buyProgress';
import { Bought } from '../pages/buyProduct/pages/Bought';

import { GlobalStyles } from '../components/GlobalStyles';


export function App() {
  return (
    <div>
      <GlobalStyles />
        <Routes>
          {/* Header */}
          <Route exact path="/" element={<GenerateHeader />} />
          <Route exact path="/about" element={<GenerateHeader />} />
          <Route exact path="/contact" element={<GenerateHeader />} />
          <Route exact path="/productInfo/:productId" element={<GenerateHeader />} />
          <Route exact path="/listProducts/:productsSearch" element={<GenerateHeader />} />
          <Route exact path="/alquiler/:typeID" element={<GenerateHeader />} />
          <Route exact path="/cart" element={<GenerateHeader />} />
          <Route exact path="/preAuth" element={<GenerateHeader />} />
          <Route exact path="/buyProgress" element={<GenerateHeader />} />
          <Route exact path="/setDate" element={<GenerateHeader />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/productInfo/:productId" element={<ProductInfo />} />
          
          <Route path="/buyProgress" element={<UserForm />} />
          <Route path="/setDate" element={<Calendar />} />
          {/* <Route path="/infoBuyer" element={<InfoBuyer />} />
          <Route path="/bought" element={<Bought />} /> */}


          <Route path="/listProducts/:productsSearch" element={<ListProducts />} />
          <Route path="/alquiler/:typeID" element={<Alquiler />} />
          {/* Posible enlace para tipo de producto */}
          {/* <Route path='/cart' element={<Cart />} /> */}

          {/* Tema usuario */}
          <Route path='/preAuth' element={<PreAuth />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Parte de usuario, no se puede acceder sin loguearse */}
          <Route path="/datos" element={<Datos />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/reservas" element={<Reservas />} />
          
          {/* Error página no encontrada cuidado!! */}
          <Route path='*' element={<Error />} />
        </Routes>

        
        {/* Footer */}
        {/* <Routes>  
          <Route exact path="/" element={<GenerateFooter />} />
          <Route exact path="/about" element={<GenerateFooter />} />
          <Route exact path="/contact" element={<GenerateFooter />} />
          <Route exact path="/productInfo/:productId" element={<GenerateFooter />} />
          <Route exact path="/listProducts/:productsSearch" element={<GenerateFooter />} />
          <Route exact path="/alquiler/:typeID" element={<GenerateFooter />} />
          <Route exact path="/cart" element={<GenerateFooter />} />
          <Route exact path="/preAuth" element={<GenerateFooter />} />
        </Routes> */}
    </div>
        
  );
}

