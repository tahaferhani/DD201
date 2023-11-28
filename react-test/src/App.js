import {Component} from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

class App extends Component {
  render() {
    return <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  }
}

export default App;