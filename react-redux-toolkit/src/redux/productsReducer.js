import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false
    },
    reducers: {
        
    },
    extraReducers: function(builder) {
        builder.addCase(loadProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
    }
})

export const loadProducts = createAsyncThunk("products/loadProducts", async () => {
    let resp = await fetch("https://dummyjson.com/products");
    resp = await resp.json();
    return resp.products;
})

export default productsSlice.reducer;