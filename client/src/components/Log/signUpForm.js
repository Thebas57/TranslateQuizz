import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [formSubmit, setFormSubmit] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const terms = document.getElementById("terms");

    if (password !== passwordConf || !terms.checked) {
      if (password !== passwordConf) alert("Les mots de passe sont différents");
      if (!terms.checked) alert("Il faut valider les conditions générales");
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        withCredentials: true,
        data: {
          pseudo: pseudo,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          setFormSubmit(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {!formSubmit ? (
        <form action="" method="post" onSubmit={handleRegister}>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
            placeholder="Pseudo"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Mot de passe"
          />
          <br />
          <input
            type="password"
            name="password-conf"
            id="password-conf"
            onChange={(e) => setPasswordConf(e.target.value)}
            value={passwordConf}
            placeholder="Confirmer le mot de passe"
          />
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" terget="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <br />
          <input type="submit" value="S'inscrire" />
        </form>
      ) : (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      )}
    </>
  );
};

export default SignUpForm;
