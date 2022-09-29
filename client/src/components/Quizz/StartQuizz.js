import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../actions/quizz.actions";
import { isEmpty, shuffleArray } from "../Utils";

const StartQuizz = () => {
  const [loadQuizz, setLoadQuizz] = useState(true);
  const [isLoading, seIsLoading] = useState(false);
  const [score, setScore] = useState(0);

  const quizz = useSelector((state) => state.quizzReducer);
  const wordsData = useSelector((state) => state.wordsReducer);

  const dispatch = useDispatch();

  // Permets d'initialiser un nouveau mot pour le quizz
  const initWord = async () => {
    // On mélange le tableau + on choppe un id
      const arrWords = await shuffleArray(wordsData);
      const idWord = arrWords[0]._id;
      //On dispatch avec le nouvelle id
      dispatch(getQuizz(idWord));
  };

  // Incrémente ou pas le score + appelle initScore
  const handleScore = () => {
    // On remet le chrono à 0
    const progressBar = document.getElementById("progress_bar");
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
      {!isEmpty(quizz) ? (
        <>
          <div className="question-quizz">
            Traduction de : <span>{quizz.fr}</span>
          </div>
          <div id="progress_bar" className="progress_bar"></div>
          <div className="quizz">
            {!isEmpty(quizz.noTranslate) &&
              quizz.noTranslate.map((question) => {
                return (
                  <div
                    onClick={handleScore}
                    className="response"
                    key={question}
                  >
                    {question}
                  </div>
                );
              })}
          </div>
          <h3>{score}</h3>
        </>
      ) : (
        <i className="fas fa-spinner fa-spin"></i>
      )}
    </>
  );
};

export default StartQuizz;
