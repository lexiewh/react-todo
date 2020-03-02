import React from 'react';
import './stylesheets/App.css';

// Components
import TodoItem from './components/TodoItem'

// To do data
import todosData from './todosData'

function App() {
  const todos = todosData.map(todo => <TodoItem key={todo.id} item={todo} />)

  return(
    <div className="content">
      {todos}
    </div>
  )
}

export default App

// General notes:
// - props is an object
// - use curly braces around JS in JSX
// - props can be "nested". a prop can be an object
