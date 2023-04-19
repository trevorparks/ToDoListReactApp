import './App.css';
import React, {useState, useEffect, useRef, useContext} from 'react';
import TaskDisplay from './TaskDisplay.js'; 
import FormDisplay from './FormDisplay.js'; 
import UserTitleContext from './context/UserTitleContext';
import App from './App.js'; 


function DisplayUserTitle(username, title) {
    const {userTitle} = useContext(UserTitleContext);
    return(
        <div>
            <p>
                {userTitle.username}'s <br/> To Do List Called: <br />{userTitle.title}
            </p>
        </div>
    )
}
export default DisplayUserTitle;