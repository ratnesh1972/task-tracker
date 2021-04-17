import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer'

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setState] = useState([])

  useEffect(() => {
    const getData = async () => {
      const taskData = await fetchTasks();
      setState(taskData);
    }
    getData();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    setState(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updtTask = {
      ...taskToToggle, reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(updtTask)
    })

    const data = await res.json();

    setState(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(task)
    })

    const newTask = await res.json();
    // const id = Math.floor(Math.random() * 10000 + 1);
    // const newTask = { id, ...task };
    setState([...tasks, newTask]);
  }

  return (
    <Router>
      <div className="box d-flex d-flex-column">
        <div className="main px-2 mx-auto mt-auto mb-auto">
          <div className="card shadow">
            <div className="card-header">
              <div className="card-title">
                <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
              </div>
            </div>
            <Switch>
              <Route exact path="/">
                {showAdd && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p className="p-4">No tasks to show :(</p>}
                <Footer />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
