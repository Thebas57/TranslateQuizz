import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";
import Quizz from "../../pages/Quizz";
import Navbar from "../Navbar";

function index() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quizz" component={Quizz} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default index;
