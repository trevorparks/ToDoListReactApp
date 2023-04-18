import './App.css';
import React, { useState } from 'react';

export default function FormDisplay({ setUsername, setTitle }) {
   
    // const [userTitle, setUserTitle] = useState('');


    const handleUsername = (value) => {
        setUsername(value);
    };

    const handleTitle = (value) => {
        setTitle(value);
    };

    // const handleUserTitle = (value) => {
    //     setUserTitle(value); onClick={displayUserTitle}
    // };

    return (
        <div>
            <form>
            <div className="labels">
            <ul>
            <li> <label> Username <br />
              <input type="text" id="username" onChange={(e) => handleUsername(e.target.value)} />
            </label> </li>
        
          <li> <label>  List Title  <br /> 
          <input type="text" id="title" onChange={(e) => handleTitle(e.target.value)} />  
          </label></li>

            <li><button type="button" >  Submit </button></li>

          
            </ul>
            </div>
            </form>
        </div>
    );


};
