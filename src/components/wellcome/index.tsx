import { 
    Section,
    Name, 
    ShortDescription,
    Links,
    Link
} from "./style"
import { 
    GithubLogo,
    LinkedinLogo,
    InstagramLogo,
    TwitterLogo,
    YoutubeLogo
} from "@phosphor-icons/react"

export function Wellcome(){
    return (
        <Section id="home">
            <Name>Hi, I am <p>Kauã Lima</p></Name>
            <ShortDescription>I'm a developer passionate about <span>Mathematics</span> and <span>Artificial Intelligence</span>.</ShortDescription>
            <Links>
                <Link href="https://github.com/kaualimaa" target="_blank"><GithubLogo size={36} weight="fill" /></Link>
                <Link href="https://www.linkedin.com/in/kaua-lima/" target="_blank"><LinkedinLogo size={36} weight="fill" /></Link>
                <Link href="https://www.instagram.com/kaualimadev/" target="_blank"><InstagramLogo size={36} weight="fill" /></Link>
                <Link href="https://twitter.com/kaualimadev" target="_blank"><TwitterLogo size={36} weight="fill" /></Link>
                <Link href="https://www.youtube.com/channel/UCrjwgVR-_e4tFPhOutC9F9A" target="_blank"><YoutubeLogo size={36} weight="fill" /></Link>
            </Links>
        </Section>
    )
}