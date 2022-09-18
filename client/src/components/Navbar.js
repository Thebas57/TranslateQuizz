import React, { useContext } from "react";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
            <li>Bienvenue x</li>
            <li>Déconneixno</li>
          </ul>
        ) : (
          <ul>
            <li>T pas connecté con</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
