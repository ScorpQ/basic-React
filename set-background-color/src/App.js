import { useState } from 'react';

function App() {
  const [value, setValue] = useState(' ');

  const changeColor = ({target}) => {
    document.body.style.backgroundColor = value;
    setValue(target.value);
  }; 

  return (
    <div className="App">
      <label for="fname">Renk gir</label>
      <input type="text" id="fname" onChange={ changeColor } value={value} />
    </div>
  );
}

export default App;