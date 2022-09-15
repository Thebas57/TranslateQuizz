import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";

const Profil = () => {
  //si l'utilisateur est connecté
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <>
          <p>Coucou</p>
        </>
      ) : (
        <Log signin={false} signup={true} />
      )}
    </div>
  );
};

export default Profil;
