import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const getData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const jsonResponse = response.ok ? await response.json() : null ;
      return jsonResponse;
    }
    catch(error){
      console.log(error);
      console.log(error);
    }
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
