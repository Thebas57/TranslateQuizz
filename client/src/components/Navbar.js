import React, { useContext } from "react";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <NavLink exact to="/">
          <div className="logo">
            <img src="./img/icon.png" alt="logo" />
            <h3>Translate Quizz</h3>
          </div>
        </NavLink>
        {uid ? (
          <ul>
            <NavLink exact to="/profil">
              <li>Bienvenue {userData.pseudo}</li>
            </NavLink>
            <Logout></Logout>
          </ul>
        ) : (
          <ul>
            <NavLink exact to="/profil">
              <li>Se connecter</li>
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
