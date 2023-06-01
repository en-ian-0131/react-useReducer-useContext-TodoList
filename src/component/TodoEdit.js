import React, { useEffect, useState } from 'react'
import { Action } from './DispatchType'

function TodoEdit({ todoContent, dispatch, id }) {
  const [editingInput, setEditingInput] = useState('')

  useEffect(() => {
    setEditingInput(todoContent)
  }, [todoContent])
  return (
    <>
      <input
        type="text"
        value={editingInput}
        onChange={(e) => {
          setEditingInput(e.target.value)
        }}
      />

      <button
        className="buttonEditing"
        onClick={() => {
          dispatch({
            type: Action.FINIEHED,
            payload: { newTodos: editingInput, id: id },
          })
        }}
      >
        Finiehed
      </button>
    </>
  )
}

export default TodoEdit
