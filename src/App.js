import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { ResetPassword } from "./ResetPassword";
import myImg from './1337.png'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
       <div className="logo">
        <img src={myImg} alt="Img not found"/>
      </div> 
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <ResetPassword onFormSwitch={toggleForm} />
      }
    </div> 
  );
}

export default App;
