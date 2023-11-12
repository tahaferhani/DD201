import {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "22",
      checked: false,
      data: []
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onChecked = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  getData = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/photos")
    this.setState({
      data: resp.data
    })
  }

  render() {
    return <div>
      <h1>React App {this.state.value}</h1>
      <input value={this.state.value} className={this.state.checked ? "red" : ""} onChange={this.onChange}/>
      <input type='checkbox' onChange={this.onChecked} />
      {
        this.state.checked && <p>Error</p>
      }

      <button onClick={this.getData}>Get Data</button>
      {
        this.state.data.map((item) => {
          return <div key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        })
      }
    </div>
  }
}

export default App;