const initialState = {
    items: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return { items: action.payload }
        default:
            return state;
    }
};

export default Reducer;