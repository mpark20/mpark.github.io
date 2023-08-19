import { useState, useEffect } from "react";
import "./Window.css"
import { useSearchParams } from "react-router-dom";
import { JOBS_MAP, ACTIVITIES_MAP } from "../../descriptions";

const searchParams = new URLSearchParams(window.location.search);

const Window = (props) => {
    const CATEGORY = props.title;
    let experience_map; 
    if (CATEGORY === 'work') {
        experience_map = JOBS_MAP; 
    } else {
        experience_map = ACTIVITIES_MAP;
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const [experience, setExperience] = useState(experience_map.get(searchParams.get(CATEGORY)) || props.default);
    

    useEffect(() => {
        const defaultSelected = searchParams.get(CATEGORY) || props.default.organization;
        document.getElementById(defaultSelected).classList.add("active-alt");
    }, [])

    const toggle = (exp) => {
        setSearchParams(params => {
            params.set(CATEGORY, exp.organization);
            return params;
        });
        setExperience(exp);
        const tabs = document.getElementsByClassName(CATEGORY + " exps");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active-alt");
        }
        document.getElementById(exp.organization).classList.add("active-alt");
    }

    const getDescription = (items) => {
        if (items.length == 1) {
            return (<div>{items[0]}</div>)
        }
        return (
            <ul className="description">
                {items.map((item, index) =>
                    <li key={index} className="desc-item">{item}</li>
                )}
            </ul>
        )
    }

    return(
        <div className="responsive-wrapper">
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
                    {getDescription(experience.desc)}
                    <br/>
                    {/* <div className="skills">Skills: {experience.skills}</div> */}
                    <div className="skills">
                        {experience.skills.map((skill, index) =>
                            <div key={index} id={skill} className="tag">{skill}</div>
                        )}
                    </div>
                    <br/>
                </div>
            </div>
        </div>
        
    )
}
export default Window; 