import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {ProductInfo} from './pages/ProductInfo';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {Error} from './pages/Error';
import { PreAuth } from './pages/PreAuth';


export function Routing(){
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productInfo/:productId" element={<ProductInfo />} />
          <Route path='/preAuth' element={<PreAuth />} />
          <Route path='*' element={<Error />} />
        </Routes>
      
      </Router>
  );
};