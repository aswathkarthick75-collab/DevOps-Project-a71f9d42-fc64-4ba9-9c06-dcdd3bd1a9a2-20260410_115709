import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>DevOps-Project-a71f9d42-fc64-4ba9-9c06-dcdd3bd1a9a2</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}