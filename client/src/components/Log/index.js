import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModal = (e) => {
    if (e.target.id === "register") {
      setSignUpModal(true);
      setSignInModal(false);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <>
      <div className="log-container">
        <div className="form-container">
          <ul>
            <li
              onClick={handleModal}
              id="register"
              className={signUpModal ? "active-btn" : null}
            >
              S'inscrire
            </li>
            <li
              onClick={handleModal}
              id="login"
              className={signInModal ? "active-btn" : null}
            >
              Se connecter
            </li>
          </ul>
          {signUpModal && <SignUpForm />}
          {signInModal && <SignInForm />}
        </div>
      </div>
      <div className="img-log">
        <img src="./img/icon.png" alt="img-log" />
      </div>
    </>
  );
};

export default Log;
