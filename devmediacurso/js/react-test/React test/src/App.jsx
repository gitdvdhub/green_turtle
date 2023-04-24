import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          A contagem é {count}
        </button>
        <p>
          Edite <code>src/App.jsx</code> e salve pra testar o HMR
        </p>
      </div>
      <p className="read-the-docs">
        Clique na logo do React ou Vite para ler mais
      </p>
    </>
  )
}

export default App
