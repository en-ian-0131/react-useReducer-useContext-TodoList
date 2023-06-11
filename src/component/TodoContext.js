import { createContext, useReducer } from 'react'
import TodoRedcer, { initState } from './TodoReducer'
import { Action } from './TodoReducer'

export const TodoContext = createContext(initState)

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoRedcer, initState)
  const { todos } = state

  const addFunction = (todoContent) => {
    return {
      id: Math.floor(Math.random() * 1000),
      todoContent: todoContent,
      complete: false,
      editing: false,
    }
  }

  const addTodo = (todoContent) => {
    const newTodoContent = addFunction(todoContent)
    const newTodo = [...todos, newTodoContent]

    dispatch({ type: Action.ADD, payload: { newTodo: newTodo } })
  }
  const toggleComplete = (id) => {
    const newTodo = todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, complete: !v.complete }
      } else {
        return { ...v }
      }
    })
    dispatch({ type: Action.COMPLETE, payload: { newTodo: newTodo } })
  }

  const toggleDelete = (id) => {
    const newTodo = todos.filter((v, i) => {
      return v.id !== id
    })
    dispatch({ type: Action.DELETE, payload: { newTodo: newTodo } })
  }

  const toggleEdit = (id) => {
    const newTodo = todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, editing: !v.editing }
      } else {
        return { ...v }
      }
    })
    dispatch({ type: Action.EDITING, payload: { newTodo: newTodo } })
  }

  const toggleUpdate = (id, inputValue) => {
    const newTodo = todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, todoContent: inputValue, editing: false }
      } else {
        return { ...v }
      }
    })
    dispatch({ type: Action.UPDATE, payload: { newTodo: newTodo } })
  }

  const value = {
    todos: state.todos,
    addTodo: addTodo,
    toggleComplete: toggleComplete,
    toggleDelete: toggleDelete,
    toggleEdit: toggleEdit,
    toggleUpdate: toggleUpdate,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
