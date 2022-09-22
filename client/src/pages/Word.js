import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord } from "../actions/post.actions";
import { getWords } from "../actions/words.actions";
import { isEmpty } from "../components/Utils";
import WordHandle from "../components/Word/WordHandle";

const Word = () => {
  const wordsData = useSelector((state) => state.wordsReducer);
  const [addWord, setAddWord] = useState(false);

  const [word, setWord] = useState("");
  const [traduction, setTraduction] = useState("");

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer);

  //Permets d'afficher ou non l'ajout d'un mot
  const handleWord = () => {
    setAddWord(!addWord);
  };

  //Ajoute un mot
  const newWord = async (e) => {
    e.preventDefault();

    if (word && traduction) {
      const data = {
        noTranslate: word,
        translate: traduction,
        language: "anglais",
        user: userData._id,
      };

      await dispatch(addNewWord(data));
      //on reset les inputs
      setWord("");
      setTraduction("");
      setAddWord(false);
      dispatch(getWords());
    } else alert("Il manque une information");
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
          <form action="" method="post" onSubmit={newWord}>
            <div className="flex-word">
              <input
                type="text"
                placeholder="Entrer un mot"
                name="word"
                id="word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <img src="./img/arrow.svg" alt="arrow" />
              <input
                type="text"
                placeholder="Traduction"
                name="traduction"
                id="traduction"
                value={traduction}
                onChange={(e) => setTraduction(e.target.value)}
              />
            </div>
            <input type="submit" value="Valider" />
          </form>
        )}
        {!isEmpty(wordsData) &&
          wordsData.map((word) => {
            if (!word.isLearn)
              return <WordHandle word={word} key={word._id} />;
            else return null;
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
            if (word.isLearn)
              return <WordHandle word={word} key={word._id} />;
            else return null;
          })}
      </div>
    </div>
  );
};

export default Word;
