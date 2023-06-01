import { useState, useReducer, useEffect } from 'react'
import './styles/TodoList.css'
import TodoContents from './component/TodoContents'
import { Action } from './component/DispatchType'

const reducer = (todos, action) => {
  console.log('todos', todos)
  console.log('action', action)
  const { type } = action
  const { todoContent, id, newTodos } = action.payload
  switch (type) {
    case Action.ADD:
      return [
        ...todos,
        { todoContent: todoContent, complete: false, editing: false },
      ]
    case Action.COMPLETE:
      return todos.map((todo, i) => {
        if (i === id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    case Action.DELETE:
      return todos.filter((todo, i) => {
        return i !== id
      })
    case Action.EDITING:
      return todos.map((todo, i) => {
        if (i === id) {
          return { ...todo, editing: !todo.editing }
        } else {
          return todo
        }
      })
    case Action.FINIEHED:
      return todos.map((todo, i) => {
        if (i === id) {
          return { ...todo, todoContent: newTodos, editing: false }
        } else {
          return todo
        }
      })
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todoContent, setTodoContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: Action.ADD,
      payload: { todoContent: todoContent },
    })
  }

  return (
    <>
      <div className="container todoList">
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
        <TodoContents
          todos={todos}
          dispatch={dispatch}
          todoContent={todoContent}
        />
      </div>
    </>
  )
}

export default App
