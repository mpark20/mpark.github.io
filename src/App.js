import './App.css';
import Home from './Home.js'
import About from './About.js'
import Experience from './Experience'
import LinkedIn from './images/linkedin.png'
import GitHub from './images/github.png'
import MenuIcon from './images/menu-icon.png'
import {
  Route,
  NavLink,
  Routes,
  HashRouter
} from "react-router-dom";


const App = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("nav-dropdown").style.display; 
    if (menu == "block") {
      document.getElementById("nav-dropdown").style.display = "none";
    } else {
      document.getElementById("nav-dropdown").style.display = "block";
    }
    
  }
  return (
    <HashRouter>
    <div className="nav-container">
      <div id="navbar">
        <ul className="nav">
          
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/experience">experience</NavLink></li>
          
          <li style={{float:"right", marginRight: '40px'}} className='socials'><a href="https://github.com/mpark20" ><img src={GitHub}/></a></li>
          <li style={{float:"right"}} className='socials'><a href="https://www.linkedin.com/in/molly-park-17879824b/" ><img src={LinkedIn}/></a></li>
        </ul>
        <ul className="nav mobile">
          <li id="menu-icon" onClick={toggleMenu}><img  src={MenuIcon} width="25px" style={{margin:"10px"}}/></li>
        </ul>
        <div id="nav-dropdown" className="mobile">
          <ul>
            <li id="x-btn" onClick={toggleMenu}>x</li>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/experience">experience</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><a href="https://github.com/mpark20" >GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/molly-park-17879824b/" >LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>

   


    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </div>
    
    </HashRouter>
  );
}

export default App;
