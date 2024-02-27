import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/cartReducer'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Macbook pro 2019", price: 9000 },
    { id: 2, name: "HP Elitebook", price: 8000 },
    { id: 3, name: "Macbook pro 2020", price: 10000 },
  ])
  const { items, total } = useSelector(state => state.cart)
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cart : {total} DH</h3>
      {
        items.map(product => (
          <li key={product.id}>{product.name} - {product.price} <button onClick={() => dispatch(removeFromCart(product))}>Remove</button></li>
        ))
      }

      <hr />

      <h3>Products list</h3>
      <ul>
      {
        products.map(product => (
          <li key={product.id}>{product.name} - {product.price} <button onClick={() => dispatch(addToCart(product))}>Add to cart</button></li>
        ))
      }
      </ul>
    </div>
  )
}

export default App
