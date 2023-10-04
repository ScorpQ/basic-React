import  { lore_object }  from './data/characters';
import { useState } from 'react';

export default function App() {

  const [lore, setLore] = useState('');

  const title = '';
  const loreFacts = <h1>{title === '' ? 'Click The Images' : ''}</h1>;



  const handleClick = ({target}) => {
    Object.keys(lore_object).map((item, i) => {
      if(target.alt === item){ /* setLore(target.alt === item ? lore_object[item].lore : 'null') */
        setLore(lore_object[item].lore);
      }
    })
    console.log(lore); /*....jsx degeri güncellenirken consol'da delay var....*/
  }


  const charaters = (
      Object.keys(lore_object).map((item ,i) => {
        return (
          <img 
            src={lore_object[item].img} 
            onClick={handleClick}
            key={item}
            alt={item}
            aria-label={item}
          />
        ) 
      })
  );


  return (
    <>
      {loreFacts}
      <div className = 'lore' style={{backgroundImage: 'url(./images/land.jpg)'}}>
          <div className = 'lore-text'>
            <p>{lore}</p>
          </div>
          <div className = 'lore-chars'>
            {charaters}
          </div>
      </div>
    </>
  );
}


