import './App.css'
import Product from './components/Product'
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(loadProducts());
  }, [])

  return (
    <div className='app'>
      <div className="product-list">
        {
          products.map(item => {
            return <Product data={item} key={item.id} />
          })
        }
      </div>

      <Cart/>
    </div>
  )
}

export default App
