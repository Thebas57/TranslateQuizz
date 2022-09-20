import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Quizz extends Component {
  render() {
    return (
      <div className="quizz-container">
        <NavLink exact to="/word">
          <div className="title-quizz">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Gérer vos mots</span>
            </button>
          </div>
        </NavLink>
        <br />
        <div className="title-quizz">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Commencer le quizz</span>
          </button>
        </div>
      </div>
    );
  }
}
