import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total = state.total + action.payload.price;
        },
        removeFromCart: (state, action) => {
            // action.payload = product

            // Method 1
            state.items = state.items.filter(item => item.id != action.payload.id);
            state.total = state.total - action.payload.price;
            // Method 2
            // const index = state.items.findIndex(item => item.id == action.payload.id)
            // state.items.splice(index, 1);
        },
    }
})

// Method 1
export const { addToCart, removeFromCart } = cartSlice.actions;
// Method 2
// export const addToCart  = cartSlice.actions.addToCart;
// export const removeFromCart  = cartSlice.actions.removeFromCart;
export default cartSlice.reducer;