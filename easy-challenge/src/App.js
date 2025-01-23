import React, { useState } from 'react';
import './App.css';

// Easy
function App() {
  const [count, setCount] = useState(0)
  return (
    <section className="card">
      <h1 className='counter'> {count} </h1>
      <button onClick={() => setCount((count) => count + 1)}> ⬆️
      </button>
      <button onClick={() => setCount((count) => count - 1)}> ⬇️
      </button>
    </section>
  )
}

export default App;