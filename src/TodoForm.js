import React from 'react'

function TodoForm({ handleFormSubmit }) {
  let todoID = React.useRef(0)
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('called')
    e.preventDefault()
    todoID.current = todoID.current + 1
    handleFormSubmit({
      id: todoID.current,
      title: inputValue,
      completed: false,
    })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
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
  )
}

export default TodoForm
