export const initState = { todos: [] }

export const Action = {
  ADD: 'ADD',
  COMPLETE: 'COMPLETE',
  DELETE: 'DELETE',
  EDITING: 'EDITING',
  UPDATE: 'UPDATE',
}

const TodoRedcer = (state, action) => {
  console.log('todos', state.todos)
  const { type, payload } = action
  console.log('type', type)
  console.log('payload', payload)
  switch (type) {
    case Action.ADD:
      return { ...state, todos: payload.newTodo }
    case Action.COMPLETE:
      return { ...state, todos: payload.newTodo }
    case Action.DELETE:
      return { ...state, todos: payload.newTodo }
    case Action.EDITING:
      return { ...state, todos: payload.newTodo }
    case Action.UPDATE:
      return { ...state, todos: payload.newTodo }
    default:
      return state
  }
}

export default TodoRedcer
