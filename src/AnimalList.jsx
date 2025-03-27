import { useState } from 'react'

const AnimalList = () => {

  const [animals, setAnimals] = useState(['Chat', 'Chien', 'Tigre'])
  const [newAnimal, setNewAnimal] = useState('')

  const handleChange = (event) => {
    setNewAnimal(event.target.value)
  }

  const addAnimal = () => {
    if (newAnimal.trim() === '') return alert('Should enter an animal')
    if (animals.includes(newAnimal)) return alert(`actually got one ${newAnimal}`)
    setAnimals([...animals, newAnimal])
    setNewAnimal('')
  }

  const deleteAnimal = (animalToRemove) => {
    const animalsFiltered = animals.filter((animal) => animal !== animalToRemove)
    setAnimals(animalsFiltered)
  }

  return(
    <div>
      <input
        type="text"
        placeholder='Entrer un animal'
        onChange={handleChange}
        value={newAnimal}
      />
      <button onClick={addAnimal}>Ajouter</button>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            {animal} <button onClick={() => deleteAnimal(animal)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimalList
