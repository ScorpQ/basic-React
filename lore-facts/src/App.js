import  { lore_object }  from './data/characters';


const title = '';
const loreFacts = <h1>{title === '' ? 'Click it' : ''}</h1>;

const handleClick = ({target}) => {
  console.log(target.alt);  
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




export default function App() {
  return (
    <>
      {loreFacts}
      <div className = 'lore' style={{backgroundImage: 'url(./images/land.jpg)'}}>
          <div className = 'lore-text'>
         
          </div>
          <div className = 'lore-chars'>
            {charaters}
          </div>
      </div>
    </>
  );
}


