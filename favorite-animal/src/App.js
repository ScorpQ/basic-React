import { useEffect, useState } from 'react';
import getApiData from './api';
import './App.css';

function App() {
  const[data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      try {
        const jsonData = await getApiData();
        setData(jsonData.slice(0,4).map((item) => item.url));
      }
      catch(error){
        console.log("ERROR");
      }
    } 
    
    getData();
  },[]);

  useEffect(() => {
    console.log(data);
  },[data])

  return (
    <div className="App">

    </div>
  );
}

export default App;
