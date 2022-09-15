import React, { Component } from "react";

export default class Quizz extends Component {
  render() {
    return (
      <div className="quizz-container">
        <div className="title-quizz">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Commencer le quizz</span>
          </button>
        </div>
      </div>
    );
  }
}
