import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About page</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products page</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
