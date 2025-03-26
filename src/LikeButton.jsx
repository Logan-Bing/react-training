import { useState } from 'react'

const LikeButton = () => {

  const [like, setCount] = useState(0)

  const increment = () => {
    setCount(like + 1)
  }

  return(
  <div>
    <p>❤️ J’aime : {like}</p>
    <button onClick={increment}>Ajouter un j'aime</button>
  </div>
  )
}

export default LikeButton
