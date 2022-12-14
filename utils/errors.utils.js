module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit contenir 6 caractères";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà utilisé";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà utilisé";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.toString().includes("Email")) errors.email = "Email inconnu";
  if (err.toString().includes("Mdp")) errors.password = "Password inconnu";

  return errors;
};

//Error pour word
module.exports.wordAddErrors = (err) => {
  let errors = {noTranslate:"", translate:""};

  if(err.code === 11000 && Object.keys(err.keyValue)[0].includes("noTranslate"))
    errors.noTranslate = "Ce mot possède déjà une traduction";

  if(err.code === 11000 && Object.keys(err.keyValue)[0].includes("translate"))
    errors.translate = "Un mot existe déjà pour cette traduction";

  return errors;
}