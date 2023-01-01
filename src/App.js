import './App.css';
import Home from './Home.js'
import About from './About.js'
import Projects from './Projects';
import Experience from './Experience';
import {
  Route,
  NavLink,
  Routes,
  HashRouter
} from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <div className="nav-container">
      <div id="navbar">
        <ul className="nav">
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="/about">about me</NavLink></li>
          <li><NavLink to="/experience">experiences</NavLink></li>
          <li><NavLink to="/projects">projects</NavLink></li>
        </ul>
      </div>
    </div>

    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
    
    </HashRouter>
  );
}

export default App;
