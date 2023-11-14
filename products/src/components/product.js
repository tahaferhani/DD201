
import {Component} from 'react';

class Product extends Component {
  render() {
    return (
        <div>
            <h2>{this.props.product.title}</h2>
            <img width="200" src={this.props.product.thumbnail} />
            <ul>
                {this.props.product.images.map((item, index) => {
                    return <img width="50" key={index} src={item}/>
                })}
            </ul>
        </div>
    );
  }
}

export default Product;