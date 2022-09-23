import React, { useContext } from "react";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  //Pour le menu
  const plus = document.querySelector(".plus-menu");
  const subMenu = document.querySelector(".sub-menu"); //sub - menu
  if (plus) {
    plus.addEventListener("click", () => {
      plus.classList.toggle("plus-menu--toggle");
      subMenu.classList.toggle("display-menu--toggle");
    });
  }

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
            <li>
              <button className="plus-menu"></button>
              <div className="sub-menu display-menu--toggle">
                <ul className="sub-menu-list">
                  <NavLink exact to="/word">
                    <li>
                      <img src="./img/tick.png" alt="tick" />
                      <span>Mes mots</span>
                    </li>
                  </NavLink>
                  <NavLink exact to="/quizz">
                    <li>
                      <img src="./img/tick.png" alt="tick" />
                      <span>Quizz</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>
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
