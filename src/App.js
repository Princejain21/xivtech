import './App.css';
import Nav from './Components/navbar/Nav.js';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Nav/>
    <Switch>
     <Route exact path="/xivtech" >
      <Home/>
      </Route>
     <Route  exact path="/contact">
     <Contact/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
