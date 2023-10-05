import React, { useState } from 'react';
import Contact from './components/contact.js';
import Login from './components/login.js';
import './style.css';

function App() {
  const [islogin, setIsLogin] = useState(null); // that means initial value is a falsy if it is null.
  const [value, setValue] = useState(null);

  const handleSubmit = () => {
    alert(value);
  };

  return (
    <div className = "contact">
      {islogin ? 
      <>
        <h1>Contact</h1>
        <Contact /> 
      </>
      : 
      <>
        <h1>Enter a Password</h1>
        <Login onClick={handleSubmit} setIt={setValue} /> {/* 'onClick' is a only attribute not eventlistener.*/}
      </>
      }
    </div>
  );
}

export default App;
