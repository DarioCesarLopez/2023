import './Counter.css';

import React, {
  useEffect,
  useState,
} from 'react';

function Counter () {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Contador: ${count}`
  },[count])

  const increment = () => {
    setCount(count +1)
  }

  return (
    <div className='counter'>
      <h2>Contador de clicks: {count}</h2>
      <button onClick={increment}>Incrementar clicks</button>
    </div>
  )
}

export default Counter