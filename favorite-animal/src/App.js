import { useEffect, useState } from 'react';
import getApiData from './api';
import getRandom from './util';
import './App.css';

function App() {
  const[data, setData] = useState([]);
  const[url, setUrl] = useState();

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
    let counter = 0;
    const interval = setInterval(() => {
      setUrl(data[counter])
      counter === 3 ? counter = 0 : counter++ ;
    }, 500)

    return () => {
      clearInterval(interval);
    };
  },[data])

  return (
    <div className="App">
      <img src={url} alt="sdaf" />
    </div>
  );
}

export default App;
