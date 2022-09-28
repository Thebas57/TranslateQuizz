import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../actions/quizz.actions";
import { isEmpty, shuffleArray } from "../Utils";

const StartQuizz = () => {
  const [loadQuizz, setLoadQuizz] = useState(true);
  const [score, setScore] = useState(0);

  const quizz = useSelector((state) => state.quizzReducer);
  const wordsData = useSelector((state) => state.wordsReducer);

  const dispatch = useDispatch();

  // Permets d'initialiser un nouveau mot pour le quizz
  const initWord = () => {
    // On mélange le tableau + on choppe un id
    const arrWords = shuffleArray(wordsData);
    const idWord = arrWords[0]._id;
    //On dispatch avec le nouvelle id
    dispatch(getQuizz(idWord));
  };

  // Incrémente ou pas le score + appelle initScore
  const handleScore = () => {
    initWord();
    setScore(score + 1);
  };

  useEffect(() => {
    if (loadQuizz) {
      initWord();

      setLoadQuizz(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadQuizz]);

  return (
    <>
      <ul>
        {!isEmpty(quizz.noTranslate) &&
          quizz.noTranslate.map((question) => {
            return <div key={question}>{question}</div>;
          })}
      </ul>
      <button onClick={handleScore}>clique</button>
      <h3>{score}</h3>
    </>
  );
};

export default StartQuizz;
