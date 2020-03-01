import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return(
      <div className="content">
        <h1>Lexie White</h1>
        <p>I am learning React! I am currently a student at the University of Iowa</p>
        <div className="list">
        <ul>
          <li>Disney World</li>
          <li>Italy</li>
          <li>Greece</li>
        </ul>
        </div>
      </div>
    )
  }
}
