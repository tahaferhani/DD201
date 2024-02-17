import { useSelector } from "react-redux";
import Product from "./Product";

export default () => {
    const cart = useSelector(state => state.cart.items);

    return <div className="cart">
        {
          cart.map(item => {
            return <Product data={item} key={item.id} isCart={true} />
          })
        }
    </div>
}