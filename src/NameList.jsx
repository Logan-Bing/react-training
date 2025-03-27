import { useState } from "react";


const NameList = () => {

  const [names] = useState(['Alice', 'Bob', 'Charlie'])

  return(
    <div>
      <h2>Liste des prénoms</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
