import React from "react";
import { useDispatch } from "react-redux";
import { switchWordAction } from "../../actions/post.actions";
import { getWords } from "../../actions/words.actions";

const WordHandle = ({ word }) => {
  const dispatch = useDispatch();

  //Ajoute le mot dans les mots appris ou non en fonction de son état de base
  const switchWord = async (word) => {
    if (window.confirm("Veuillez confirmer")) {
      await dispatch(switchWordAction(word._id));
      dispatch(getWords());
    }
  };

  return (
    <div className="flex-word" key={word._id}>
      {!word.isLearn ? (
        <img
          src="./img/tick.png"
          alt="tick"
          className="tick"
          onClick={() => switchWord(word)}
        />
      ) : (
        <img
          src="./img/moins.png"
          alt="moins"
          className="moins"
          onClick={() => switchWord(word)}
        />
      )}
      <p>{word.noTranslate}</p>
      <img src="./img/arrow.svg" alt="arrow" />
      <p>{word.translate}</p>
    </div>
  );
};

export default WordHandle;
