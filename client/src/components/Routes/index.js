import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Quizz from "../../pages/Quizz";
import Word from "../../pages/Word";
import Navbar from "../Navbar";

function index() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quizz" component={Quizz} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/word" component={Word} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default index;
