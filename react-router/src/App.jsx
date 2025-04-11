import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Service from './pages/Service';

function App() {
  return (
    <>
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home page</NavLink><br/>
            <NavLink to="/about">About page</NavLink><br/>
            <NavLink to="/services">Services page</NavLink>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/service/:id" element={<Service/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

