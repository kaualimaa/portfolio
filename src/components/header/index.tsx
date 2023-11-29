import { 
    Container,
    Name,
    Buttons,
    Button
} from "./style"

export function Header(){
    return (
        <Container>
            <Name>kaualimadev</Name>
            <Buttons>
                <Button href="#home">Home</Button>
                <Button href="#skills">Skills</Button>
                <Button href="#projects">Projects</Button>
                <Button href="">About Me</Button>
                <Button href="">Contact Me</Button>
                <Button id="resume">Resume</Button>
            </Buttons>
        </Container>
    )
}