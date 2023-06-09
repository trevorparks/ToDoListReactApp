import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import FormDisplay from './FormDisplay.js';
import DisplayUserTitle from './DisplayUserTitle';


export default function TaskDisplay({ startingTodos, usernameRef, titleRef}) {
  const [todos, setTodos] = useState(startingTodos);
  const [task, setTask] = useState('');

  const [recentTask, setRecentTask] = useState(null);

 

  const addTodo = () => {
    let newTodo = { id: todos.length + 1, title: task, completed: false };
    setTodos((todos) => [...todos, newTodo]);
 
  };

  const handleTask = (value) => {
    setTask(value);
    setRecentTask(value);
  };

  // useEffect(() => {
  //   console.log("yo");
  //    }, [recentTask]);

  const handleCompletedChange = (id, isChecked) => {
    setTodos((startingTodos) =>
      startingTodos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: isChecked };
        } else {
          return t;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((startingTodos) => startingTodos.filter((t) => t.id !== id));
  };

  return (
    
    <div>
      <form>
      <div className="labels row">
      <div id="toDoList">
      <li> <DisplayUserTitle /></li></div>
      <div id="newToDo"><label >
          New To Do <br />
          <input type="text" id="todo" onChange={(e) => handleTask(e.target.value)} />
        </label>  <br />
        <button type="button" id="addButton" onClick={addTodo}>
          Add
        </button>
        </div>
        </div>
      </form>
      
      {todos.map((t) => (
        <div className="toDos" key={t.id}> {t.id}.   {t.title}

          <input
            type="checkbox"
            checked={t.completed}
            onChange={(e) => handleCompletedChange(t.id, e.target.checked)}
          />
          <br />
          <button onClick={() => handleDelete(t.id)}> 
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

// {usernameRef} <br /> To Do List <br /> {titleRef}