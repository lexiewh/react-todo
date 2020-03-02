import React from 'react';
import './stylesheets/App.css';

// Components
import TodoItem from './components/TodoItem'

export default class App extends React.Component {

  render() {
    return(
      <div className="content">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
}
