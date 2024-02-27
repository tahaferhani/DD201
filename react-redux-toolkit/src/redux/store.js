import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})

export default store;