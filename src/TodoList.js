import React from 'react'

function TodoList({ todos, updateTodos }) {
  const handleDelete = (selectedTodo) => {
    const filteredTodos = todos.filter((todo) => todo.id !== selectedTodo.id)
    updateTodos(filteredTodos)
  }

  const toggleCompleted = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    updateTodos(updatedTodos)
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">My Todos</h2>
      <ul className="mt-4">
        {todos.length ? (
          todos.map((todo) => {
            return (
              <li
                className="text-xl text-teal-500 font-medium flex items-center py-2"
                key={todo.id}
              >
                <button
                  className="flex-none focus:outline-none focus:shadow-outline p-1 rounded"
                  type="button"
                  aria-pressed={todo.completed}
                  onClick={() => toggleCompleted(todo)}
                >
                  {todo.completed ? (
                    <span role="img" aria-label="thumbs up">
                      👍🏼
                    </span>
                  ) : (
                    <span
                      role="img"
                      aria-label="backhand index finger pointing right"
                    >
                      👉🏼
                    </span>
                  )}
                </button>
                <p className="flex-1 px-2">{todo.title}</p>
                <button
                  className="text-xs px-2 py-1 bg-transparent border border-red-500 text-red-500 text-medium rounded hover:bg-red-500 hover:text-white transition duration-200"
                  onClick={() => handleDelete(todo)}
                >
                  Delete
                </button>
              </li>
            )
          })
        ) : (
          <li className="text-md text-teal-500 font-medium text-center">
            No todos yet{' '}
            <span role="img" aria-label="sad face">
              😢
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList
