import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return <BrowserRouter>
        <nav>
          <NavLink to='/'>Home</NavLink><br/>
          <NavLink to='/about'>About</NavLink><br/>
          <NavLink to='/products'>Products</NavLink><br/>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>

        <nav>
          <NavLink to='/'>Home</NavLink><br/>
          <NavLink to='/about'>About</NavLink><br/>
          <NavLink to='/products'>Products</NavLink><br/>
        </nav>
      </BrowserRouter>
}

export default App;
