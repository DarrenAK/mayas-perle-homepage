import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { useMediaQuery } from 'react-responsive';



import Header from "./components/layout/Header";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <div>
          <ul className="navbar">
            <li className="link-item">
              <Link to="/">Home</Link>
            </li>
            <li className="link-item">
              <Link to="/about">About</Link>
            </li>
            <li className="link-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="body-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
