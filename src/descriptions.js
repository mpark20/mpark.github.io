export const JOBS = [
    {
        "title": "STEP Intern",
        "organization": "Google",
        "time": "Jun 2023 - Sep 2023", 
        "desc": [
            "Used full-stack technologies to implement filtering logic for Google’s contract management system", 
            "Improved the efficiency of internal legal workflows by adding UI features to apply various filter categories", 
            "Wrote frontend unit tests to ensure that the tool meets modern web accessibility standards",
            "Wrote a technical design document, underwent design reviews, and presented to 100+ engineers & managers"
        ], 
        "skills": ["Java", "JUnit", "TypeScript", "Protocol Buffers", "Remote Procedure Calls", "Closure Templates"]
    },
    {
        "title": "Software Development Intern",
        "organization": "Phenomena",
        "time": "Nov 2022 - Feb 2023", 
        "desc": [
            "Developed interactive, educational experiences for an EdTech startup that provides browser-based materials for K-12 students and educators", 
            "Fully designed and implemented 5 kid-friendly experiences that are now published on their platform: Projectile Motion, Light Refraction, Electric Fields, Passive & Active Transport, Binary Search"
        ], 
        "skills": ["Design", "Problem Solving", "Creativity", "Teaching"],
    },
    {
        "title": "Medical Scribe",
        "organization": "Scribe America",
        "time": "Aug 2022 - June 2023", 
        "desc": [
            "Used the Epic EMR system to record physician notes during patient visits in outpatient neurology", 
            "Intensively studied medical terminology, healthcare regulations, and electronic medical record systems to get official Scribe America certification"
        ], 
        "skills": ["Critical Thinking", "Medical Terminology", "Electronic", "Medical Records",],
    },
]
export const ACTIVITIES = [
    {
        "title": "Member",
        "organization": "Interactive Intelligence",
        "time": "Sep 2022 - May 2023", 
        "desc": ["I2 is UW’s student led machine learning and neuroscience organization. I completed their Intro Neuro/AI course in Spring 2023, and am hoping to join a research project this autumn!"], 
        "skills": ["NumPy", "MatPlotLib", "Linear Algebra", "Calculus"],
    },
    {
        "title": "Web Developer",
        "organization": "SEAL",
        "time": "Sep 2022 - May 2023", 
        "desc": ["As part of the lab's DevOps group, I developed web features for the Sensors, Energy, and Automation Lab at UW. This included populating all publications on the lab website, automating the process of adding new entries, and improving functionality of the UW Industrial Assessments Center website."], 
        "skills": ["HTML/CSS", "JS", "Git", "Figma", "WordPress"],
    },
    {
        "title": "Web Developer",
        "organization": "DUBvelopers",
        "time": "Jan 2023 - Jun 2023", 
        "desc": ["Was part of a 4-member coding team that built the website for the beloved Seattle cafe, Leon Coffee House."], 
        "skills": ["React", "Git", "Teamwork"],
    },
    {
        "title": "Coding Instructor",
        "organization": "UW SWE",
        "time": "Oct 2022 - present", 
        "desc": ["As part of the Society of Women Engineers outreach committee, I taught weekly Python courses for students in local middle schools. I also sent outreach emails for the org's educational programs and volunteered at K-12 STEM events"], 
        "skills": ["Leadership", "Collaboration", "Organization", "Python"]
    },
]

const JOBS_MAP = new Map();
const ACTIVITIES_MAP = new Map();
for (let i = 0; i < JOBS.length; i++) {
    JOBS_MAP.set(JOBS[i].organization, JOBS[i]);
}
for (let i = 0; i < ACTIVITIES.length; i++) {
    ACTIVITIES_MAP.set(ACTIVITIES[i].organization, ACTIVITIES[i]);
}
export {JOBS_MAP, ACTIVITIES_MAP}; 
