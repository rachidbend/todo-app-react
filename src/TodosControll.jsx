/* eslint-disable react/prop-types */
export default function TodosControll({
  onTodoFilter,
  onClearCompleted,
  numTodoCompleted,
  filter,
  centerClassName = '',
}) {
  // ${filter === 'completed' ? 'active' : '' }

  return (
    <div className={`todo-controlles ${centerClassName}`}>
      <div className="todo--num-left">
        {!numTodoCompleted
          ? 'Tasks completed'
          : `${numTodoCompleted} items left`}
      </div>
      <div className="todo-controlles--center">
        <button
          className={`btn btn--all ${filter === 'all' ? 'filter-active' : ''}`}
          onClick={() => onTodoFilter('all')}
        >
          all
        </button>
        <button
          className={`btn btn--active ${
            filter === 'active' ? 'filter-active' : ''
          }`}
          onClick={() => onTodoFilter('active')}
        >
          active
        </button>
        <button
          className={`btn btn--completed ${
            filter === 'completed' ? 'filter-active' : ''
          }`}
          onClick={() => onTodoFilter('completed')}
        >
          completed
        </button>
      </div>
      <div>
        <button className="btn btn--clear" onClick={onClearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
