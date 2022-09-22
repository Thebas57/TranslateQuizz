import React from "react";

const WordHandle = ({word}) => {

  const switchWord = (isLearned, word) => {
    if(isLearned) {
      if(window.confirm("Ce mot ne sera plus dans le quizz, valider pour continuer")){
        console.log(word)
      }
    }
  }

  return (
    <div className="flex-word" key={word._id}>
      {!word.isLearned ? (
        <img src="./img/tick.png" alt="tick" className="tick" onClick={() => switchWord(true, word)}/>
      ) : (
        <span>-</span>
      )}
      <p>{word.noTranslate}</p>
      <img src="./img/arrow.svg" alt="arrow" />
      <p>{word.translate}</p>
    </div>
  );
};

export default WordHandle;
