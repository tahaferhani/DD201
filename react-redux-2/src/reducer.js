const initialState = { 
    users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return { users: [...state.users, action.payload] }  
        case 'DELETE_USER':
            return { users: state.users.filter(user => user.id != action.payload) }
        default:
            return state
    }
}

export default reducer