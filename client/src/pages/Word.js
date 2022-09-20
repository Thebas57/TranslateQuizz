import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import WordHandle from "../components/Word/WordHandle";

const Word = () => {
  const wordsData = useSelector((state) => state.wordsReducer);
  const [addWord, setAddWord] = useState(false);
  console.log(wordsData);

  //Permets d'afficher ou non l'ajout d'un mot
  const handleWord = () => {
    setAddWord(!addWord);
  };

  return (
    <div className="word-page">
      <div className="word-container word-div">
        <div className="add-word">
          <h3>Mots en cours </h3>
          <img
            src="./img/add-word.png"
            alt="add-word"
            height="22px"
            onClick={handleWord}
          />
        </div>
        <div className="header-word">
          <h4>Français</h4>
          <h4>Anglais</h4>
        </div>
        {addWord && (
          <div className="flex-word">
            <input type="text" placeholder="Entrer un mot" />
            <img src="./img/arrow.svg" alt="arrow" />
            <input type="text" placeholder="Traduction" />
          </div>
        )}
        {!isEmpty(wordsData) &&
          wordsData.map((word) => {
            return <WordHandle word={word} key={word._id} />;
          })}
      </div>
      <div className="word-div">
        <h3>Mots appris</h3>
        <div className="header-word">
          <h4>Français</h4>
          <h4>Anglais</h4>
        </div>
        {!isEmpty(wordsData) &&
          wordsData.map((word) => {
            return <WordHandle word={word} key={word._id} />;
          })}
      </div>
    </div>
  );
};

export default Word;
