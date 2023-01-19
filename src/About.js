
import Chick from "./images/kiiroitori-march.gif"
import Snoopy from "./images/snoopy-spin.gif"

const About = () => {
    return(
        <>
        <div className="container">
        
            <br/>
            <div style={{float:"left", width:"25%"}}><img src={Chick} width='90%'/></div>
            <h2>a little introduction...</h2>
            <p>
                Hello! My name is Molly and I'm a first year at the <b>University of Washington</b>. 
                I was born and raised here in Washington, and I've grown to love Seattle's cafe scene and beautiful PNW views.
            </p>
            
        </div>
        <div className="container">
            <h2>interests</h2>
            <p>
                I'm currently a computer science major at the Allen School, but I'm also hoping to learn more about the life 
                sciences during my time at university. I'm interested in exploring how technology can be applied to sectors such as healthcare 
                and biological research. 
            </p>
            <br/>
            <p>
               As a medical scribe, I've started to see how electronic medical records are a key example of how technology is improving the 
               efficiency of health systems. As I grow my skillset, I am interested in working on something related 
               to this topic!
            </p>
        </div>
        <div className="container">
            
            <h2>just for fun :)</h2>
            <br/>
            <div className="text-image-wrap">
                <div>
                    <p>
                        I'm a big foodie! My first experience with HTML/CSS was 
                        actually a <a href="https://momolikesfood.com" target="_blank">recipe website </a>back in 2021. In my free time, I enjoy 
                        posting good eats, dorm cooking attempts, and cafe hopping trips on my <a href="https://instagram.com" target="_blank">Instagram</a>. 
                    </p>
                </div>
                <div className="img-contain">
                    <iframe style={{border:"none"}} width="100%" height="100%" src="https://www.instagram.com/momolikesfood/embed"></iframe>
                </div>
            </div>
            <br/>
            <div className="text-image-wrap">
                <div>
                    <p>
                        I also grew up doing competitive figure skating for 10 years, so ice skating remains my favorite form of exercise. 
                        I don't skate much anymore, but I enjoy Saturday practices with the UW Figure Skating club.
                    </p>
                </div>
                <div className="img-contain">
                    <img src={Snoopy} width="100%"/>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default About; 