import Window from "./components/Window/Window";

const Experience = () => {
    
    let items0 = [
        {
            "title": "Web Developer",
            "organization": "UW SEAL",
            "time": "Sep 2022 - present", 
            "desc": "Maintaining and improving websites for the Sensors, Energy, and Automation Lab at UW", 
            "skills": "HTML/CSS, JS, Git, Figma"
        },
        {
            "title": "Software Development Intern",
            "organization": "Phenomena Learning",
            "time": "Nov 2022 - present", 
            "desc": "Designing and developing interactive, browser-based educational experiences for K-12 students and educators", 
            "skills": "Design, Problem Solving, Creativity, Teaching"
        },
        {
            "title": "Medical Scribe",
            "organization": "Evergreen Health",
            "time": "Aug 2022 - present", 
            "desc": "Using the Epic EMR system to record physician notes during patient visits in outpatient neurology.", 
            "skills": "Critical Thinking, Medical Terminology, Electronic Medical Records"
        },
    ]
    let items1 = [
        {
            "title": "Coding Instructor",
            "organization": "UW Society of Women Engineers",
            "time": "Oct 2022 - present", 
            "desc": "Planning and teaching introductory Python courses for students in local middle schools", 
            "skills": "Leadership, Collaboration, Organization, Repl.it"
        },
        {
            "title": "Hospital Volunteer",
            "organization": "Swedish Medical Center",
            "time": "Apr 2021 - Aug 2021", 
            "desc": "Volunteered 164+ hours at Swedish Medical Center Seattle in the Neuro Telemetry and Orthopedics departments. Responsibilities include assisting nurses and CNAs, delivering lab samples, and navigating patients and their families.", 
            "skills": ""
        },
    ]

    

    return(
        <>
        <div style={{width:"60%", margin: "auto"}}>
            <h1>education</h1>
            <div style={{backgroundColor: "white", borderRadius: "8px", boxShadow: "2px 1px 1px grey", padding: "20px", margin: "20px 0"}}>
                <h3>University of Washington Seattle</h3>
                <div>2022-2026</div>
                <br/>
                <div style={{fontSize:"14px"}}>
                    <h4>Major:</h4> 
                    <p><i>Computer Science</i></p>
                    <br/>
                    <h4>Coursework:</h4>
                    <p><i>Computer Programming II & III, Matrix Algebra, Medical Ethics, Introductory Biology</i></p>
                    <br/>
                    <h4>Clubs:</h4> 
                    <p><i>DUBvelopers, WiC, COM^2, SWE, UW Figure Skating</i></p>
                    <br/>
                </div>
            </div>
            
        </div>
        <Window title="work" experiences={items0} default={items0[0]}/>
        <Window title="volunteer" experiences={items1} default={items1[0]}/>
        </>
    )
}
export default Experience; 