
import {Component} from 'react';
import axios from 'axios';
import Product from './components/product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "Samsung",
      products: []
    };
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  onClick = async () => {
    var resp = await axios.get(`https://dummyjson.com/products/search?q=${this.state.search}`);
    this.setState({
      products: resp.data.products
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.search} onChange={this.onChange} /><br/>
        <button onClick={this.onClick}>Search</button>

        <br/>

        {this.state.products.map((product) => {
          return <Product product={product}/>
        })}
      </div>
    );
  }
}

export default App;