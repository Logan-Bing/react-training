import { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return(
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default Counter
