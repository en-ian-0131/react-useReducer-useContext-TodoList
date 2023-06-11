import { useContext } from 'react'
import { TodoContext } from './TodoContext'
import Todo2Editing from './Todo2Editing'

function TodoContent2() {
  const { todos, toggleComplete, toggleDelete, toggleEdit } =
    useContext(TodoContext)
  return (
    <>
      {todos.map((v, i) => {
        return (
          <>
            <div className="todoContent" key={v.id}>
              {v.editing ? (
                <Todo2Editing id={v.id} oldTodoContent={v.todoContent} />
              ) : (
                <>
                  <span
                    className={
                      v.complete
                        ? 'todoContentSpanComplete'
                        : 'todoContentSpanDefault'
                    }
                  >
                    {v.todoContent}
                  </span>
                  <button
                    className="buttonEditingDefault"
                    onClick={() => {
                      toggleEdit(v.id)
                    }}
                  >
                    Editing
                  </button>
                </>
              )}

              <button
                className={
                  v.complete ? 'buttonComplete' : 'buttonCompleteDefault'
                }
                onClick={() => {
                  toggleComplete(v.id)
                }}
              >
                Complete
              </button>
              <button
                className="buttonDelete"
                onClick={() => {
                  toggleDelete(v.id)
                }}
              >
                Delete
              </button>
            </div>
          </>
        )
      })}
    </>
  )
}

export default TodoContent2
