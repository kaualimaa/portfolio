import { Section, Title, AboutMeDiv, Picture, TextDiv } from "./style";

export function AboutMe(){
    return(
        <Section id="aboutme"> 
            <Title>About Me</Title>
            <AboutMeDiv>
                <Picture src="https://avatars.githubusercontent.com/u/93043960?v=4" alt="Kauã Lima (Me)" />
                <TextDiv>
                    <p>
                        Hello, my name is Kauã Lima, a Brazilian born in the city of Fortaleza, Ceará. I am 17 years old. I got introduced to programming during high school; My first encounter was with HTML and CSS. Later, I learned the pseudolanguage Portugol and, subsequently, Python. I started as a web developer, ventured into both Front-end and Back-end development. In the Back-end, I had my first experience with databases, ORMs, and APIs.
                        <br /><br />
                        My interest in the field of Artificial Intelligence began in elementary school when I had contact with Lego Mindstorms, a robotics kit from Lego. Due to my exposure to this Lego kit, I always had a desire to create intelligent robots. As a result of my interest in building intelligent robots and the rapid growth of AIs, I ventured into the field and fell in love with Artificial Intelligence and its subfields. This passion aligns well with my love for mathematics
                    </p>
                    <a href="" download="">View Resume</a> 
                </TextDiv>
            </AboutMeDiv>
        </Section>
    )
}