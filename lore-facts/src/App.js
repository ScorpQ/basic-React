import  { lore_object }  from './data/characters';

/*
const myArray = [];
for(let key in A){
    myArray.push(A[key].lore)
  };
*/
 


function App() {
  return (
    <div className = 'App'>
      <div className = 'text'>
      asdf
      </div>
      <div className = 'chars'>
        {
         Object.keys(lore_object).map((item ,i) => {
        return <img src={lore_object[item].img} />
         })
        }
      </div>
    </div>
  );
}

export default App;
