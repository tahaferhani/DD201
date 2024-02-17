export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export const loadProducts = () => {
    return async (dispatch) => {
        const resp = await fetch("https://dummyjson.com/products").then(resp => resp.json());
        dispatch({
            type: 'LOAD_PRODUCTS',
            payload: resp.products
        })
    }
}