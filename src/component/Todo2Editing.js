import { useState, useContext, useEffect } from 'react'
import { TodoContext } from './TodoContext'

function Todo2Editing({ id, oldTodoContent }) {
  const { toggleUpdate } = useContext(TodoContext)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(oldTodoContent)
  }, [])
  return (
    <span className="todoContentSpanDefault" key={id}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button
        className="buttonEditing"
        onClick={() => {
          toggleUpdate(id, inputValue)
        }}
      >
        Finiehed
      </button>
    </span>
  )
}

export default Todo2Editing
