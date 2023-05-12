import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Nav from './Components/navbar/Nav.js';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Nav/>
    <Routes>
     <Route path="/xivtech" element={<Home/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
