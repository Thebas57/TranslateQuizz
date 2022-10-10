import axios from "axios";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../AppContext";

const UpdateProfil = () => {
  const [pseudo, setPseudo] = useState("");
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  // Requete acios pour modifier le profil
  const update = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload/` + uid, {
        pseudo: pseudo,
      })
      .then((res) => {
        window.location = "/profil";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="update-form">
      <div className="header-form">
        <h3>Voilà ton profil !</h3>
        <span>Ici, tu peux modifier ton pseudo !</span>
      </div>
      <div>
        <form action="" method="post" onSubmit={update}>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Pseudo"
            value={pseudo}
          />
          <br />
          <input type="submit" value="Modifier" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfil;
