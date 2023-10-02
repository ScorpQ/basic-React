import { A } from './data/characters';

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
         Object.keys(A).map((item ,i) => {
          return <img src={A[item].img} />
         })
        }
      </div>
    </div>
  );
}

export default App;
