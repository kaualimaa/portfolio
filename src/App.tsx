import { Container, Main } from "./global"
import { Header } from "./components/header"
import { Wellcome } from "./components/wellcome"
import { Tools } from "./components/skills"
import { Projects } from "./components/projects"
import { AboutMe } from "./components/aboutme"
import { ContactMe } from "./components/contactMe"

function App() {
  return (
    <Container>
      <Header/>
      <Main>
        <Wellcome/>
        <Tools/>
        <Projects/>
        <AboutMe />
        <ContactMe />
      </Main>
    </Container>
  )
}

export default App
