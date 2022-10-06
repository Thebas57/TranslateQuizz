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

  //Fonction qui reset l'animation du chrono + enlève les backgrounds des divs des anciennes réponses
  const resetAnimation = () => {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
    //On enlève les class des divs repsonses
    const divs = document.getElementsByClassName("response");
    for (const element of divs) {
      element.classList.remove("success-rep");
      element.classList.remove("error-rep");
    }
  };

  // Incrémente ou pas le score + appelle initScore
  const handleScore = (reponse) => {
    //Si c'est la bonne réponse, on incrémente le score
    if (quizz.translate === reponse.target.innerHTML) {
      reponse.target.className += " success-rep";
      setScore(score + 1);
    } else {
      //Mauvaise réponse
      reponse.target.className += " error-rep";
    }
    setTimeout(() => {
      // On remet le chrono à 0
      resetAnimation();
      initWord();
    }, "1000");
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
            <div>
              Traduction de : <span>{quizz.fr}</span>
            </div>
            <div>Score : {score}</div>
          </div>
          <div id="progress_bar" className="progress_bar"></div>
          <div className="quizz">
            {!isEmpty(quizz.noTranslate) &&
              quizz.noTranslate.map((question) => {
                return (
                  <div
                    onClick={(question) => handleScore(question)}
                    className="response"
                    key={question}
                  >
                    {question}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <i className="fas fa-spinner fa-spin"></i>
      )}
    </>
  );
};

export default StartQuizz;
