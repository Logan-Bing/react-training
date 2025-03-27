import { useState } from "react";

const Click = () => {

  const [name, setName] = useState('')

  const DisplayAlert = () => {
    alert(`Ceci est votre nom: ${name}`)
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return(
    <div>
      <input
        type="text"
        value={name}
        placeholder="Entre ton nom"
        onChange={handleChange}
      />
      <button onClick={DisplayAlert}>Alert</button>
    </div>
  )
}

export default Click
