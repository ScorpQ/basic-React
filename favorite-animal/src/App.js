import { useEffect, useState } from 'react';
import getApiData from './api';
import './App.css';

function App() {
  const[data, setData] = useState();
  const[img, setImg] = useState({});
  const[favorite, setFavorite] = useState();

  // fetch json and set it to hook named as 'data'.
  useEffect(() => {
    async function getData(){
      try {
        const apiData = await getApiData();
        setData(apiData);
      } catch (error) {
        console.log("ERROR");
      }
    }

    getData();
  }, []);

  // image set to url from state setter hook named data.
  useEffect(() => {
    let counter = 0;
    data && setImg(data[counter]);
    const interval = setInterval(() => {
      data && setImg(data[counter]);

      counter === data.length - 1 ? (counter = 0) : counter++;
      }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);
  

  const getFavorite = ({target}) => {
    setFavorite(target.value);
  }

  // iterate over json data to options
  const myElement = (
    data && data.map((item) => {
      return (
        <option 
          key={item.id}> 
          {item.title} 
        </option>
      )
    })
  );
  
  return (
    <div className="App">
        <img className={favorite === img.title ? 'favorite' : 'unfavorite'} src={img.url} />
        <select name="colors" id="colors" onChange={getFavorite}>
          {myElement}
        </select>
        <p>{favorite}</p>
        <p>{img.title}</p>
    </div>
  );
}

export default App;