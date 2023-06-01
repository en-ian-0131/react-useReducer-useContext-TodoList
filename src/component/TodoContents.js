import TodoEdit from './TodoEdit'
import { Action } from './DispatchType'

function TodoContents({ todos, dispatch }) {
  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div key={i} className="todoContent">
            <span
              className={
                todo.complete
                  ? 'todoContentSpanComplete'
                  : 'todoContentSpanDefault'
              }
            >
              {/* 編輯框跟內容切換 */}
              {todo.editing ? (
                <TodoEdit
                  todoContent={todo.todoContent}
                  dispatch={dispatch}
                  id={i}
                />
              ) : (
                todo.todoContent
              )}
            </span>

            {/* 編輯時，完成跟刪除消失 */}
            {todo.editing ? (
              ''
            ) : (
              <>
                <button
                  className={
                    todo.complete ? 'buttonComplete' : 'buttonCompleteDefault'
                  }
                  onClick={() => {
                    dispatch({ type: Action.COMPLETE, payload: { id: i } })
                  }}
                >
                  {todo.complete ? 'Cancel' : 'Complete'}
                </button>

                <button
                  className="buttonDelete"
                  onClick={() => {
                    dispatch({
                      type: Action.DELETE,
                      payload: { id: i },
                    })
                  }}
                >
                  Delete
                </button>
              </>
            )}

            {/* 編輯跟編輯完成切換 */}
            {todo.editing ? (
              ''
            ) : (
              <button
                className={
                  todo.editing ? 'buttonEditing' : 'buttonEditingDefault'
                }
                onClick={() => {
                  dispatch({ type: Action.EDITING, payload: { id: i } })
                }}
              >
                Editing
              </button>
            )}
          </div>
        )
      })}
    </>
  )
}

export default TodoContents
