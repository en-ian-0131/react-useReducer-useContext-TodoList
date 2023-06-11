import { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

function TodoForm() {
  const [todoContent, setTodoContent] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoContent)
    setTodoContent('')
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit} className="todoList">
        <h1>Todo List</h1>
        <input
          type="text"
          className="todoListInput"
          value={todoContent}
          onChange={(e) => {
            setTodoContent(e.target.value)
          }}
        />
      </form>
      <hr />
    </div>
  )
}

export default TodoForm
