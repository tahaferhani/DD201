import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from "redux-thunk";
import cartReducer from "./store/cartReducer.js";
import productsReducer from "./store/productsReducer.js";

const store = createStore(combineReducers({
  cart: cartReducer,
  products: productsReducer
}), applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
