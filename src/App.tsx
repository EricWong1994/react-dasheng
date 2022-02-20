import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  type inputEvent = React.ChangeEvent<HTMLInputElement>

  const inputHandler = (e: inputEvent) => {
    console.log('e: ', e);
  }

  return (
    <div className="App">
      <h2>
      hello vite
      </h2>
      <input type="text" onInput={inputHandler} />
    </div>
  )
}

export default App
