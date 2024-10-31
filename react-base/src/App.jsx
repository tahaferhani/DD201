
import { useState } from 'react';
import './App.css'

function App() {
  const [age, changerAge] = useState(20);
  const [nom, changerNom] = useState("");

  const onButtonClick = () => {
    changerAge(age + 10);
  }

  const onInputChange = (event) => {
    changerNom(event.target.value);
  }

  return (
    <div>
      <h1>Mon age est {age}</h1>
      <button onClick={onButtonClick}>Augmenter mon age par 10</button>

      <hr />

      <input type="text" placeholder='Votre nom' onChange={onInputChange} />
      <h2>Votre nom est : {nom}</h2>
    </div>
  )
}

export default App
