import { useRef } from 'react';
import checkIcon from '../public/images/icon-check.svg';

/* eslint-disable react/prop-types */
export default function TodoInput({
  onAddTodo,
  onAddTodoIsCompleted,
  newTodoIsCompleted,
}) {
  const checkboxEl = useRef(null);

  return (
    <div className="todo-input">
      <label
        htmlFor="input-checkbox"
        className={`todo-input--label ${
          checkboxEl.current?.checked ? 'input-checked' : ''
        }`}
      >
        <input
          ref={checkboxEl}
          id="input-checkbox"
          type="checkbox"
          onChange={onAddTodoIsCompleted}
          checked={newTodoIsCompleted}
          className="todo-input--check"
        />
        <img src={checkIcon} alt="check icon" className=" icon icon--check" />
      </label>
      <input
        type="text"
        placeholder="Create a new todo..."
        onKeyDown={onAddTodo}
        className="todo-input--text"
      />
    </div>
  );
}
