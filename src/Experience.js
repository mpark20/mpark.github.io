import Window from "./components/Window/Window";

const Experience = () => {
    
    const workExperience = [
        {
            "title": "STEP Intern",
            "organization": "Google",
            "time": "Jun 2023 - Sep 2023", 
            "desc": "Using full stack technologies, I increased the efficiency of internal legal workflows by implementing filtering logic for Google’s contract management system. I wrote a technical design doc, delivered beyond project goals by adding UI to update filters, and wrote extensive tests to ensure that the tool meets modern web accessibility standards.", 
            "skills": "Java, JUnit, TypeScript, Protocol Buffers, Remote Procedure Calls, Closure Templates"
        },
        {
            "title": "Software Development Intern",
            "organization": "Phenomena",
            "time": "Nov 2022 - Feb 2023", 
            "desc": "Phenomena is an EdTech startup that provides interactive, browser-based educational experiences for K-12 students and educators. I fully designed and developed 5 kid-friendly experiences that are now published on their platform: Projectile Motion, Light Refraction, Electric Fields, Passive & Active Transport, Binary Search", 
            "skills": "Design, Problem Solving, Creativity, Teaching"
        },
        {
            "title": "Medical Scribe",
            "organization": "Evergreen Health",
            "time": "Aug 2022 - June 2023", 
            "desc": "I the Epic EMR system to record physician notes during patient visits in outpatient neurology. To get certified by Scribe America, I intensively studied medical terminology, healthcare regulations, and electronic medical record systems.", 
            "skills": "Critical Thinking, Medical Terminology, Electronic Medical Records"
        },
    ]
    const activities = [
        {
            "title": "Member",
            "organization": "Interactive Intelligence",
            "time": "Sep 2022 - May 2023", 
            "desc": "I2 is UW’s student led machine learning and neuroscience organization. I completed their Intro Neuro/AI course in Spring 2023, and am hoping to join a research project this autumn!", 
            "skills": "NumPy, MatPlotLib, Linear Algebra, Calculus"
        },
        {
            "title": "Web Developer",
            "organization": "SEAL",
            "time": "Sep 2022 - May 2023", 
            "desc": "As part of the lab's DevOps group, I developed web features for the Sensors, Energy, and Automation Lab at UW. This included populating all publications on the lab website, automating the process of adding new entries, and improving functionality of the UW Industrial Assessments Center website.", 
            "skills": "HTML/CSS, JS, Git, Figma, WordPress"
        },
        {
            "title": "Web Developer",
            "organization": "DUBvelopers",
            "time": "Jan 2023 - Jun 2023", 
            "desc": "Was part of a 4-member coding team that built the website for the beloved Seattle cafe, Leon Coffee House.", 
            "skills": "React, Git, Teamwork"
        },
        {
            "title": "Coding Instructor",
            "organization": "UW SWE",
            "time": "Oct 2022 - present", 
            "desc": "As part of the outreach committee, I taught weekly Python courses for students in local middle schools. I also sent outreach emails for the org's educational programs and volunteered at K-12 STEM events", 
            "skills": "Leadership, Collaboration, Organization, repl.it"
        },
    ]

    

    return(
        <>
        <div className="content-wrapper">
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
                    <p><i>Software Design & Implementation, Foundations of Computing, Linear Algebra, Biology, Medical Ethics </i></p>
                    <br/>
                    <h4>Clubs:</h4> 
                    <p><i>DUBvelopers, WiC, COM^2, SWE, UW Figure Skating</i></p>
                    <br/>
                </div>
            </div>
            
        </div>
        <Window title="work" experiences={workExperience} default={workExperience[0]}/>
        <Window title="activities" experiences={activities} default={activities[0]}/>
        </>
    )
}
export default Experience; 