import React from 'react'

import './App.css'

let todoID = 0
function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [todos, setTodos] = React.useState([
    {
      id: 'q2398q7b23',
      title: 'Todo example',
      completed: false,
    },
  ])

  const handleSubmit = (e) => {
    console.log('called')
    e.preventDefault()
    ++todoID
    setTodos([
      ...todos,
      {
        id: todoID,
        title: inputValue,
        completed: false,
      },
    ])
    setInputValue('')
  }

  const handleDelete = (todoToDelete) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoToDelete.id)
    setTodos(filteredTodos)
  }

  const toggleCompleted = (todoToUpdate) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoToUpdate.id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="w-screen h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-md m-8">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              New Todo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputValue}
              placeholder={'enter a todo'}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add todo
            </button>
          </div>
        </form>
        <hr />
        <div className="p-4">
          <h1 className="text-2xl font-bold">My Todos</h1>
          <ul className="mt-4">
            {todos.length ? (
              todos.map((todo) => (
                <li
                  className="text-xl text-teal-500 font-medium flex items-center py-2"
                  key={todo.id}
                >
                  <button
                    className={`w-6 h-6 rounded-md border-2 border-teal-700 hover:border-teal-900 flex-none ${
                      todo.completed ? 'bg-teal-700' : ''
                    }`}
                    type="button"
                    aria-pressed={todo.completed}
                    onClick={() => toggleCompleted(todo)}
                  />
                  <p className="flex-1 px-2">{todo.title}</p>
                  <button
                    className="text-xs px-2 py-1 bg-transparent border border-red-500 text-red-500 text-medium rounded hover:bg-red-500 hover:text-white transition duration-200"
                    onClick={() => handleDelete(todo)}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="text-md text-teal-500 font-medium text-center">
                No todos yet :(
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
