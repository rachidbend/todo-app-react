/* eslint-disable react/prop-types */
import { useState } from 'react';
import checkIcon from '../public/images/icon-check.svg';
import crossIcon from '../public/images/icon-cross.svg';

export default function Todo({
  isCompleted,
  todo,
  id,
  onTodoCompleteToggle,
  onTodoDelete,
}) {
  const [isHovered, setIshovered] = useState(false);

  function handleTodoHover(isBeingHovered) {
    // const isBeingHovered = false;

    isBeingHovered ? setIshovered(true) : setIshovered(false);
  }

  return (
    <div
      className={`todo ${isCompleted ? `todo-completed` : ''}`}
      id={id}
      onMouseEnter={() => handleTodoHover(true)}
      onMouseLeave={() => handleTodoHover(false)}
    >
      <label
        htmlFor={`checkbox-${id}`}
        className={`todo-input--label ${isCompleted ? 'input-checked' : ''}`}
      >
        <input
          id={`checkbox-${id}`}
          className="todo-input--check"
          type="checkbox"
          checked={isCompleted}
          onChange={() => onTodoCompleteToggle(!isCompleted, id)}
        />
        <img src={checkIcon} alt="check icon" className=" icon icon--check" />
      </label>
      <p>{todo}</p>

      <button
        className={`btn delete-todo ${isHovered ? 'delete-todo--hovered' : ''}`}
        onClick={() => onTodoDelete(id)}
      >
        <img src={crossIcon} alt="delete todo" />
      </button>
    </div>
  );
}

// ${isHovered ? 'delete-todo--hovered' : ''}`
