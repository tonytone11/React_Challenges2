import React, { useState } from 'react';
import '../CounterApp.css';

// Easy
function CounterApp() {
  const [count, setCount] = useState(0)
  return (
    <section className="counter-card">
      <h1 className='counter-title'> {count} </h1>
      <button className="counter-btn" onClick={() => setCount((count) => count + 1)}> ⬆️
      </button>
      <button className='counter-btn' onClick={() => setCount((count) => count - 1)}> ⬇️
      </button>
    </section>
  )
}

export default CounterApp;