import './App.css';
import React, {useState, useEffect, useRef, useContext} from 'react';
import TaskDisplay from './TaskDisplay.js'; 
import FormDisplay from './FormDisplay.js'; 
import UserTitleContext from './context/UserTitleContext';
import DisplayUserTitle from './DisplayUserTitle.js';


const startingTodos = [
  { id: 1, title: "Brush Teeth", completed: true },
  { id: 2, title: "Drink Coffee", completed: false },
  { id: 3, title: "Pay Bills", completed: true },
  { id: 4, title: "Take out Trash", completed: false },
];

export default function App() {

  const [username, setUsername] = useState('');
  // 
  const [title, setTitle] = useState('');
// Add default values to the userTitle object
const [userTitle, setUserTitle] = useState({ username: '', title: '' });

  // 
 
  return (
    <UserTitleContext.Provider value={{ userTitle, setUserTitle}}>
    <div className="App">
    <div className="form-display">
    <FormDisplay  setUsername={setUsername} setTitle={setTitle} setUserTitle={setUserTitle}/>
    <TaskDisplay startingTodos={startingTodos} username={username} title={title} userTitle={userTitle} />
    {/* <DisplayUserTitle username={username}/> */}
  
    </div>
    </div>
    </UserTitleContext.Provider>
  );
}
