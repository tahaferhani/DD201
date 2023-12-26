import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);

      // const resp = await fetch("https://dummyjson.com/products");
      // const data = await resp.json();
      // console.log(data);

      // fetch("https://dummyjson.com/products").then(resp => {
      //   resp.json().then(data => {
      //     console.log(data);
      //   })
      // })

      // fetch("https://dummyjson.com/products")
      //   .then(resp => resp.json())
      //   .then(data => {
      //     console.log(data);
      //   })
    }

    useEffect(() => {
      getProducts();
    }, []);

    return (
      <div>
        <h1>Products Page</h1>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <b>{product.title}</b><br/>
                <Link to={`/product/${product.id}`}><small>Voir le détail</small></Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
}