import React from 'react';
import './stylesheets/App.css';

// Components
import TodoItem from './components/TodoItem'

// To do data
import todosData from './todosData'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todos = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo}
      handleChange={this.handleChange}/>)

    return(
      <div className="content">
        {todos}
      </div>
    )
  }

}


// General notes:
// - props is an object
// - use curly braces around JS in JSX
// - props can be "nested". a prop can be an object
// - display logic goes after render but before return
//    - display logic: what shows on the page
// - state: data that the constructor maintains
// - event handling: user interaction
// - use setState any time you want to change the state
//    - new version of state (need to use {} in the setState())
//    - every time a function deals with state you have to bind it in the
//    constructor
//    - to get the last version of state use setState and a function with
//    prevState
