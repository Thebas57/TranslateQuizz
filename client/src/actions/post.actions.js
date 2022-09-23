import axios from "axios";

export const SWITCH_WORD = "SWITCH_WORD";

// Ajoute un nouveau mot
export const addNewWord = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/word`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Change l'état isLearn du mot
export const switchWordAction = (wordId) => {
  return (dispatch) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}api/word/` + wordId,
      )
      .then((res) => {
        dispatch({ type: SWITCH_WORD, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
}