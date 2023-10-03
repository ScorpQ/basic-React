import  { lore_object }  from './data/characters';

const element = (
  <div>    
  </div>
)

const charaters = (
    Object.keys(lore_object).map((item ,i) => {
      return (
        <img 
        src={lore_object[item].img} 
        />
      ) 
    })
);


export default function App() {
  return (
    <div className = 'lore' style={{backgroundImage: 'url(./images/land.jpg)'}}>
        <div className = 'lore-text'>
        test
        </div>
        <div className = 'lore-chars'>
          {charaters}
        </div>
    </div>
  );
}


