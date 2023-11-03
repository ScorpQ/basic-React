import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [active, setActive] = useState();

  const test = ({target}) => {
    setActive( (target.id == 1) ? 'red' : (target.id == 2) ? 'yellow' : 'green')
  }

  return (
    <>
      <div className='wrapper'>
        <button id="1" onClick={test} className={active == 'red' ? "red" : ""}></button>
        <button id="2" onClick={test} className={active == 'yellow' ? "yellow" : ""}></button>
        <button id="3" onClick={test} className={active == 'green' ? "green" : ""}></button>
      </div>
    </>
  )
}

export default App
