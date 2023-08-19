import Window from "./components/Window/Window";
import { ACTIVITIES, JOBS } from "./descriptions";

const Experience = () => {    

    return(
        <>
        <div className="responsive-wrapper">
            <h1>education</h1>
            <div style={{backgroundColor: "white", borderRadius: "8px", boxShadow: "2px 1px 1px grey", padding: "20px", margin: "20px 0"}}>
                <h3>University of Washington Seattle</h3>
                <div>2022-2026</div>
                <br/>
                <div>
                    <h4>Major:</h4> 
                    <p>Computer Science!</p>
                    <br/>
                    <h4>Coursework:</h4>
                    <p>Software Design & Implementation, Foundations of Computing, Linear Algebra, Biology, Medical Ethics</p>
                    <br/>
                    <h4>Clubs:</h4> 
                    <p>DUBvelopers, Interactive Intelligence, Society of Women Engineers, UW Figure Skating</p>
                    <br/>
                </div>
            </div>
            
        </div>
        <Window title="work" experiences={JOBS} default={JOBS[0]}/>
        <Window title="activities" experiences={ACTIVITIES} default={ACTIVITIES[0]}/>
        </>
    )
}
export default Experience; 