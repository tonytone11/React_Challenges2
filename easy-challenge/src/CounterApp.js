import React, { useState } from 'react';
import './App.css';

// Easy
function CounterApp() {
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

export default CounterApp;