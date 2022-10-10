import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import UpdateProfil from "../components/Log/UpdateProfil";

const Profil = () => {
  //si l'utilisateur est connecté
  const uid = useContext(UidContext);
  return (
    <div className="profil">
      <div className="sous-header"></div>
      <div className="profil-page">
        {uid ? (
          <>
            <UpdateProfil />
            <div className="img-profil">
              <img src="./img/log.svg" alt="log" />
            </div>
          </>
        ) : (
          <Log signin={false} signup={true} />
        )}
      </div>
    </div>
  );
};

export default Profil;
