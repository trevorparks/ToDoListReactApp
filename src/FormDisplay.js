import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import TaskDisplay from './TaskDisplay.js'; 
import DisplayUserTitle from './DisplayUserTitle.js';



export default function FormDisplay({ setUsername, setTitle, setUserTitle }) {
   
    // const [userTitle, setUserTitle] = useState('');

    const usernameRef = useRef("");
    const titleRef = useRef("");

    const displayUserTitle = () => {
        setUserTitle({ username: usernameRef.current, title: titleRef.current})
    }

    const [typeCount, setCount] = useState(0);
    useEffect(() => {
      document.title = `You typed ${typeCount} times`;
    });
    

    const handleInputChange = (e, inputType) => {
        const value = e.target.value;
        if (inputType === "username") {
            usernameRef.current = value;
        } else if (inputType === "title") {
            titleRef.current = value;
        }
    }

    console.log(usernameRef)
    console.log(titleRef)

    // const handleUsername = (value, typeCount) => {
    //     setUsername(value);
    //     setCount((typeCount) => typeCount + 1)

    // };

    // const handleTitle = (value) => {
    //     setTitle(value);
    //     setCount((typeCount) => typeCount + 1)
    // };

    
  

    // const handleUserTitle = (value) => {
    //     setUserTitle(value); onClick={displayUserTitle}
    // };

    return (
        <div>
            <form>
            <div className="labels">
            <ul>
            <li> <label> Username <br />
              <input type="text" id="username" onChange={(e) => handleInputChange(e, "username")}/>
            </label> </li>
        
          <li> <label>  List Title  <br /> 
          <input type="text" id="title" onChange={(e) => handleInputChange(e, "title")} />  
          </label></li>

            <li><button type="button" onClick={displayUserTitle}>  Submit </button></li>
             <div>
                <p>You typed {typeCount} times</p>
                  </div> 
          
            </ul>
            </div>
            </form>
        </div>
    );


};
// export const usernameRef = useRef("");