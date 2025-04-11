import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react';

function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_USER', payload: { id: Date.now(), name } })
  }

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button>Add user</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
