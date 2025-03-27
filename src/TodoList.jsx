import { useState } from "react";

const TodoList = () => {

  const [todos, setTodos] = useState(['faire a manger', 'faire le ménage'])
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  const addTodo = () => {
    if (newTodo.trim() === '') return alert('vous devez rentrer une todo')
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  const deleteTodo = (todoToRemove) => {
    const filteredTodos = todos.filter((todo) => todo !== todoToRemove)
    setTodos(filteredTodos)
  }

  return(
    <div>
      <input
        type="text"
        placeholder="Entrer une todo"
        onChange={handleChange}
        value={newTodo}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) =>
        <li key={index}>
          {todo} <button onClick={() => deleteTodo(todo)}>❌</button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList
