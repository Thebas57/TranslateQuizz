import React from "react";

const WordHandle = ({word}) => {

  return (
    <div className="flex-word" key={word._id}>
      <p>{word.noTranslate}</p>
      <img src="./img/arrow.svg" alt="arrow" />
      <p>{word.translate}</p>
    </div>
  );
};

export default WordHandle;
