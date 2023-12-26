import { useState } from 'react';
import './App.css';
import TaskList from "./components/TaskList";

function App() {
  const [texte, setTexte] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      texte: "Tache 1",
      complet: false
    }
  ]);

  const updateTask = (id) => {
    const index = tasks.findIndex(item => item.id == id);

    const newTasks = [...tasks];
    newTasks[index].complet = !newTasks[index].complet;
    setTasks(newTasks);
  }

  const addNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
      id: Date.now(),
      texte,
      complet: false
    }]);
    setTexte("")
  }

  return (
    <div className="App">
      <form onSubmit={addNewTask}>
        <input placeholder='Tache' value={texte} onChange={(e) => setTexte(e.target.value)}/>
        <button>Ajouter</button>
      </form>

      <br/>

      <TaskList tasks={tasks} updateTask={updateTask}/>

      <br/>
      <button onClick={onAddNumber}>Test</button>
      <br/>
      {number}
    </div>
  );
}

export default App;
