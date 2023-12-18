import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [filterCities, setFilterCities] = useState([])

  useEffect(() => {
    const cities = users.map(user => user.city);
    setFilterCities(cities);
  }, [users])

  const onAddClick = () => {
    if (updateId) {
      const newUsers = [...users];
      const index = users.findIndex(user => user.id == updateId);
      newUsers[index].name = name;
      newUsers[index].city = city;
      setUsers(newUsers);
    }
    else {
      setUsers([
        { id: Date.now(), name, city },
        ...users
      ])
    }

    setName("");
    setCity("");
    setUpdateId(null);
  }

  const onUpdate = (e) => {
    const id = e.target.id;
    const user = users.find(user => user.id == id);
    setName(user.name);
    setCity(user.city);
    setUpdateId(id);
  }

  const onDelete = (e) => {
    const id = e.target.id;
    const newUsers = users.filter(user => user.id != id);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <form>
        <label>Nom</label>
        <input value={name} onChange={e => setName(e.target.value)}/>

        <label>Ville</label>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value=""></option>
          <option value="Agadir">Agadir</option>
          <option value="Fes">Fes</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Rabat">Rabat</option>
        </select>

        <button type="button" onClick={onAddClick}>
          {updateId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <hr/>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map(({id, name, city}, index) => (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{city}</td>
                <td>
                  <button id={id} onClick={onUpdate}>Modifier</button>
                  <button id={id} onClick={onDelete}>Supprimer</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    
      <hr/>

      <form>
        <label>Filtrer par ville</label>
        <select>
          {
            filterCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))
          }
        </select>

        <button type="button">Filtrer</button>
      </form>
    </div>
  );
}

export default App;
