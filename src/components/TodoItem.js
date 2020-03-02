import React from 'react';
import '../stylesheets/TodoItem.css'

function TodoItem(props) {
  const completedItem = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed}
      onChange={() => props.handleChange(props.item.id)}/>
      <p style={props.item.completed ? completedItem : null}>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
