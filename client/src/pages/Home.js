import React from "react";

const Home = () => {
  
  //affiche ou non les petites boxs d'info
  const toggleBox = (e) => {
    const text = document.getElementById("text-"+e.target.id);
    text.classList.toggle("hidden")
  }

  return (
    <div className="home-container">
      <div className="sous-header"></div>
      <div className="grid-home">
        <div className="div1">
          <div className="titre">
            Apprends l'anglais <br /> comme un pro !
          </div>
        </div>

        <div className="div2">
          <img src="./img/blob1.svg" alt="blob1" />
        </div>

        <div className="div3">
          {" "}
          Des mots utiles dans la vie de tous les jours. <br /> Apprenez
          seulement les mots inconnus pour vous
        </div>
        <div className="div4">
          <span>Pourquoi Translate Quizz ?</span>
          <div className="div4-flex">
            <div className="box">
              <h3 onMouseOver={toggleBox} onMouseOut={toggleBox} id="box-1">Un apprentissage efficace</h3>
              <span id="text-box-1" className="hidden">
                Fais travailler ta mémoire à long terme grâce à une méthode qui
                est meilleure et plus rapide que l’apprentissage par cœur
                traditionnel.
              </span>
            </div>
            <div className="box">
              <h3 onMouseOver={toggleBox} onMouseOut={toggleBox} id="box-2">Une gestion de mots</h3>
              <span id="text-box-2" className="hidden">
                Trouve les sujets qui te conviennent : des discussions en
                vacances jusqu’à la rencontre avec la belle-famille.
              </span>
            </div>
            <div className="box">
              <h3 onMouseOver={toggleBox} onMouseOut={toggleBox} id="box-3">Un quizz génial</h3>
              <span id="text-box-3" className="hidden">
                Ne perds pas de temps avec des phrases que personne n’utilise.
                Apprends la langue dont les gens se servent vraiment.
              </span>
            </div>
          </div>
        </div>
        <div className="div5">
          <img src="./img/blob2.svg" alt="blob2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
