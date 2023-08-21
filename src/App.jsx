/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './App.scss';
import TodoInput from './TodoInput';
import TodosControll from './TodosControll';
import Todos from './Todos';
import Todo from './Todo';
import TodosContainer from './TodosContainer';
import TodoApp from './TodoApp';
import Header from './Header';
import BackgroundImage from './BackgroundImage';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [allTodos, setAllTodos] = useState(function () {
    const todos = JSON.parse(localStorage.getItem('allTodos'));
    return todos ? todos : [];
  });
  const [filtertedTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTodoIsCompleted, setNewTodoIsCompleted] = useState(false);

  const numTodoCompleted = allTodos.filter(
    todo => todo.isCompleted === false
  ).length;

  // handles the adding of a new todo
  function handleAddTodo(e) {
    // when the user presses enter when on the todo input we create and add a new todo
    if (e.key !== 'Enter') return;
    if (!e.target.value) return;
    const newTodo = {
      id: Date.now(),
      isCompleted: newTodoIsCompleted,
      text: e.target.value,
    };

    // adds the new todo
    setAllTodos(allTodos => [newTodo, ...allTodos]);
    e.target.value = '';
    setNewTodoIsCompleted(false);
  }

  // handles the state of completion of the new todo
  function handleAddTodoIsCompleted(e) {
    // the checked is a false/true value so we use it to see if the new todo is completed from the start
    setNewTodoIsCompleted(e.target.checked);
  }

  function handleTodoFilter(filter) {
    if (filter === 'all') {
      setFilter('all');
    } else if (filter === 'active') {
      setFilter('active');
    } else if (filter === 'completed') {
      setFilter('completed');
    }
  }

  // handles the toggle of the completed hcekcbox of a spesific todo
  function handleTodoCompleteToggle(completed, id) {
    setAllTodos(allTodos =>
      allTodos.map(todo => {
        if (id === todo.id) {
          todo.isCompleted = completed;
          return todo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleTodoDelete(id) {
    setAllTodos(allTodos => allTodos.filter(todo => id !== todo.id));
  }

  useEffect(
    function () {
      // commit to local storage
      localStorage.setItem('allTodos', JSON.stringify(allTodos));
    },
    [allTodos]
  );

  useEffect(
    function () {
      if (filter === 'all') {
        setFilteredTodos(allTodos);
      } else if (filter === 'active') {
        setFilteredTodos(allTodos.filter(todo => !todo.isCompleted));
      } else if (filter === 'completed') {
        setFilteredTodos(allTodos.filter(todo => todo.isCompleted));
      }
    },
    [filter, allTodos]
  );

  function handleClearCompleted() {
    setAllTodos(todo => todo.filter(todo => todo.isCompleted === false));
  }

  function handleThemeSwitch() {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  }

  return (
    <div
      className={`app ${
        theme === 'light'
          ? 'theme--light'
          : theme === 'dark'
          ? 'theme--dark'
          : ''
      }`}
    >
      <BackgroundImage theme={theme} />
      <TodoApp>
        <Header>
          <Logo />
          <ThemeSwitcher theme={theme} oneThemeSwitch={handleThemeSwitch} />
        </Header>
        <TodoInput
          onAddTodo={handleAddTodo}
          onAddTodoIsCompleted={handleAddTodoIsCompleted}
          newTodoIsCompleted={newTodoIsCompleted}
        />
        <TodosContainer>
          <Todos>
            {filtertedTodos.map(todo => (
              <Todo
                isCompleted={todo.isCompleted}
                todo={todo.text}
                id={todo.id}
                key={todo.id}
                onTodoCompleteToggle={handleTodoCompleteToggle}
                onTodoDelete={handleTodoDelete}
              />
            ))}
          </Todos>
          <TodosControll
            onTodoFilter={handleTodoFilter}
            onClearCompleted={handleClearCompleted}
            numTodoCompleted={numTodoCompleted}
            filter={filter}
          />
        </TodosContainer>
        <TodosControll
          onTodoFilter={handleTodoFilter}
          onClearCompleted={handleClearCompleted}
          numTodoCompleted={numTodoCompleted}
          filter={filter}
          centerClassName="todo-controlles--mobile"
        />
        {/* <p className="footer ">Drag and drop to reorder list</p> */}
      </TodoApp>
    </div>
  );
}
