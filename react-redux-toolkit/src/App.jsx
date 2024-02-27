import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/cartReducer'
import { loadProducts } from './redux/productsReducer';

function App() {
  const { items, total } = useSelector(state => state.cart)
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <div>
      <h3>Cart : {total} DH</h3>
      {
        items.map(product => (
          <li key={product.id}>{product.title} - {product.price} <button onClick={() => dispatch(removeFromCart(product))}>Remove</button></li>
        ))
      }

      <hr />

      <h3>Products list</h3>
      <ul>
      {
        products.loading &&
        <p>Loading ...</p>
      }
      {
        products.items.map(product => (
          <li key={product.id}>{product.title} - {product.price} <button onClick={() => dispatch(addToCart(product))}>Add to cart</button></li>
        ))
      }
      </ul>
    </div>
  )
}

export default App
