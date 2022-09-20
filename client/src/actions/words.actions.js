import axios from "axios";

export const GET_WORDS = "GET_WORDS";

export const getWords = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/word`)
      .then((res) => {
        dispatch({ type: GET_WORDS, payload: res.data.words });
      })
      .catch((err) => console.log(err));
  };
};
