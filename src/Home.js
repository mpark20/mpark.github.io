

const Home = () => {
    return(
        <>
        <div id="intro">
            <p style={{fontSize: "15px"}}>hi 👋 my name is</p>
            <p style={{fontSize: "42px", fontWeight: "bold"}}>molly park</p>
            <p style={{fontSize: "15px"}}>i’m a computer science student, aspiring software engineer, and matcha latte lover. let’s get to know each other!</p>
            <button className="btn" style={{backgroundColor:"white", color: "black"}}><a href="#/about">about me</a></button>
            <button className="btn" style={{backgroundColor:"#985517", color: "white"}}><a href="#/resume">resume</a></button>
        </div>
        </>
    )
}
export default Home; 