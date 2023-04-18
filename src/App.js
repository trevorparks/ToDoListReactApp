import './App.css';
import React, {useState} from 'react';
import TaskDisplay from './TaskDisplay.js'; // Import the TaskDisplay component
import FormDisplay from './FormDisplay.js'; // Import the TaskDisplay component

const startingTodos = [
  { id: 1, title: "Brush Teeth", completed: true },
  { id: 2, title: "Drink Coffee", completed: false },
  { id: 3, title: "Pay Bills", completed: true },
  { id: 4, title: "Take out Trash", completed: false },
];

export default function App() {

  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className="App">
    <div className="form-display">
    <FormDisplay  setUsername={setUsername} setTitle={setTitle} />
    <TaskDisplay startingTodos={startingTodos} username={username} title={title} />
    </div>
    </div>
  );
}
