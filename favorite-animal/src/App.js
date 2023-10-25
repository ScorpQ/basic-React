import { useEffect, useState } from 'react';
import getApiData from './api';
import './App.css';

function App() {
  const[data, setData] = useState();
  const[url, setUrl] = useState();

  useEffect(() => {
    async function getData(){
      try {
        const jsonData = await getApiData();
        setData(jsonData.slice(0,4));
      }
      catch(error){
        console.log("ERROR");
      }
    } 

    getData();
  },[]);

  useEffect(() => {
    let counter = 0;
    data && setUrl(data[counter].url)
    const interval = setInterval(() => {
      setUrl(data[counter].url)
      counter === data.length - 1 ? counter = 0 : counter++ ;
    }, 2000)

    
    return () => {
      clearInterval(interval);
    }
  }, [data])  

  return (
    <div className="App">
      <img src={url} />
    </div>
  );
}

export default App; 