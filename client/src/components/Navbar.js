import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src="./img/icon.png" alt="logo" />
            <h3>Translate Quizz</h3>
          </div>
          <ul>
            <li>Bienvenue x</li>
            <li>Déconneixno</li>
          </ul>
        </div>
      </nav>
    );
  }
}
