import axios from "axios";

export const GET_QUIZZ = "GET_QUIZZ";

export const getQuizz = (wordId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/word/`+ wordId)
      .then((res) => {
        dispatch({ type: GET_QUIZZ, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
