import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {ProductInfo} from './pages/ProductInfo';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {Error} from './pages/Error';


export function Routing(){
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/productInfo">ProductInfo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path='**' element={<Error />} />
        </Routes>
      </div>
      </Router>
  );
};