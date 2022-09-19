import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (!res.data.errors) window.location = "/quizz";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" method="post" onSubmit={handleLogin}>
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
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Mot de passe"
      />
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
