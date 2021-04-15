import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setState] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Fed 5th at 2:30 PM",
      reminder: false
    },
    {
      id: 2,
      text: "Movie night",
      day: "Fed 8th at 7:30 PM",
      reminder: true
    },
    {
      id: 3,
      text: "Python Seminar",
      day: "Fed 5th at 12:30 PM",
      reminder: false
    }
  ]
  )

  const deleteTask = (id) => {
    setState(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setState(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setState([...tasks, newTask]);
  }
  return (
    <div className="box d-flex d-flex-column">
      <div className="main px-2 mx-auto mt-auto mb-auto">
        <div className="card shadow">
          <div className="card-header">
            <div className="card-title">
              <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
            </div>
          </div>
          {showAdd && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p className="p-4">No tasks to show :(</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
