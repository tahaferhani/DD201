import {produce} from "immer";

const initialState = {
    items: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = state.items.find(item => item.id == action.payload.id);
            return product ? state : produce(state, copy => {
                copy.items.push(action.payload);
            })
            
        case 'REMOVE_FROM_CART':
            return produce(state, copy => {
                copy.items = copy.items.filter(item => item.id !== action.payload)
            })
        default:
            return state;
    }
};

export default Reducer;