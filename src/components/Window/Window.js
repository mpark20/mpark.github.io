import { useState, useEffect } from "react";
import "./Window.css"
const Window = (props) => {

    const [experience, setExperience] = useState(props.default);

    useEffect(() => {
        console.log(props.default.title);
        document.getElementById(props.default.organization).classList.add("active-alt");
    }, [])

    const toggle = (exp) => {
        setExperience(exp);
        //console.log(exp.title)
        const tabs = document.getElementsByClassName(props.title + " exps");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active-alt");
        }
        document.getElementById(exp.organization).classList.add("active-alt");
    }

    return(
        <div style={{width:"60%", margin: "auto"}}>
        
        <h1>{props.title}</h1>
        <div className="win-wrapper">
            <ul className="mini-nav">
                {props.experiences.map((exp, index) =>
                    <li key={index} className={props.title + " exps"} id={exp.organization} onClick={() => toggle(exp)}>{exp.organization}</li>
                )}
            </ul>
            <div className="blurb">
                <h3>{experience.title} @ {experience.organization}</h3>
                <div>{experience.time}</div>
                <br/>
                <div style={{fontSize:"14px"}}>{experience.desc}</div>
                <br/>
                <div style={{fontSize:"14px", fontStyle:"italic"}}>Skills: {experience.skills}</div>
                <br/>
            </div>
            
        </div>
        </div>
    )
}
export default Window; 