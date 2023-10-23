import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[data, setData] = useState();

  const getData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const jsonResponse = response.ok ? await response.json() : null ;
      return jsonResponse;
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    async function getDatas(){
      try {
        const jsonData = await getData();
        console.log(jsonData);
      }catch(error){
        console.log(error);
      }
    }
    getDatas();
  },[]);

  return (
    <div className="App">
   

    </div>
  );
}

export default App;
