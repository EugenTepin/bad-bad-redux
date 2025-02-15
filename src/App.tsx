import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompOne from './CompOne.tsx';
import CompTwo from './CompTwo.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a>
          <img src={reduxLogo} className="logo redux" alt="Redux logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="cards">
        <CompOne />
        <CompTwo />
      </div>
    </>
  )
}

export default App
