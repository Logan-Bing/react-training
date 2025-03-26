import { useState } from 'react'

const NameInput = () => {

  const [name, setName] = useState('')

  const handleChange = (event) =>{
    setName(event.target.value)
  }

  return(
    <div>
      <input
        type="text"
        placeholder='Entre ton prénom'
        value= {name}
        onChange={handleChange}
      />
      <p>Bonjour, {name}</p>
    </div>
  )
}

export default NameInput
