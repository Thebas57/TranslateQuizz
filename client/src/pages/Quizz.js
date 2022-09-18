import React, { Component } from "react";

export default class Quizz extends Component {
  render() {
    return (
      <div className="quizz-container">
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
