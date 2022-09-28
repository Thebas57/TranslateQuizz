import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StartQuizz from "../components/Quizz/StartQuizz";

const Quizz = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="quizz-container">
      {!isStart ? (
        <>
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
            <button className="learn-more" onClick={(e) => setIsStart(true)}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Commencer le quizz</span>
            </button>
          </div>
        </>
      ) : (
        <StartQuizz />
      )}
    </div>
  );
};

export default Quizz;
