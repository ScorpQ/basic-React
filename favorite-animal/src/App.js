import { useEffect, useState } from 'react';
import getApiData from './api';
import './App.css';

function App() {
  const[data, setData] = useState();
  const[url, setUrl] = useState();

  // fetch json and set it to hook names 'data'.
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

  // image set to url from state setter hook named data.
  useEffect(() => {
    let counter = 0;
    data && setUrl(data[counter].url)
    const interval = setInterval(() => {
      setUrl(data[counter].url)
      counter === data.length - 1 ? counter = 0 : counter++ ;
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [data])  

  const myElement = (
    data && data.map((item) => {
      return <option key={item.id}> {item.title} </option>
      })
    );



  return (
    <div className="App">
        <img src={url} />
        <select name="colors" id="colors">
          { myElement }
        </select>
    </div>
  );
}

export default App; 