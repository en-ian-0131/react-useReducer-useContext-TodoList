import TodoContent2 from '../component/TodoContent2'
import TodoForm from '../component/TodoForm'
import '../styles/TodoList.css'
import { TodoProvider } from '../component/TodoContext'
function TodoListUseReduerUseContext() {
  return (
    <TodoProvider>
      <div className="container todoList">
        <TodoForm />
        <TodoContent2 />
      </div>
    </TodoProvider>
  )
}

export default TodoListUseReduerUseContext
