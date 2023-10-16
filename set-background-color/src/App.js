import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState(' ');

  const changeColor = ({target}) => {
    setValue(target.value);
  }; 

  useEffect(() => {
    document.body.style.backgroundColor = value;
 }, [value])

  return (
    <div className="App">
      <label for="fname">Renk gir</label>
      <input type="text" id="fname" onChange={ changeColor } value={value} />
    </div>
  );
}

export default App;