import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProductDetail = async () => {
      const resp = await axios.get(`https://dummyjson.com/product/${id}`);
      setProduct(resp.data);
    }

    useEffect(() => {
      getProductDetail();
    }, []);

    return (
      <div>
        <h1>{product.title}</h1>
        <ul>
            <li>
                <b>Description : </b> {product.description}
            </li>
            <li>
                <b>Price : </b> {product.price}
            </li>
        </ul>
        <img src={product.thumbnail} alt={product.title}/>
      </div>
    );
}