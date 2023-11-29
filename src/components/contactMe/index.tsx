import { Section, Title, ContactMeDiv, Social, EmailDiv } from "./style";
import { 
    GithubLogo,
    LinkedinLogo,
    InstagramLogo,
    TwitterLogo,
    YoutubeLogo
} from "@phosphor-icons/react"
import emailjs from "@emailjs/browser"
import { FormEvent, useState } from "react";


export function ContactMe(){
    console.log(import.meta.env)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [button, setButton] = useState("Send")

    const PUBLIC_KEY = process.env.PUBLIC_KEY ? process.env.PUBLIC_KEY : ""
    const SERVICE_ID = process.env.SERVICE_ID ? process.env.SERVICE_ID : ""
    const TEMPLATE_ID = process.env.TEMPLATE_ID ? process.env.TEMPLATE_ID : ""

    emailjs.init(PUBLIC_KEY)

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()

        const templateParams = {
            to_name: "Kauã Lima",
            from_name: name,
            message: message,
            email: email,
            reply_to: email,
        }

        if(name !== "" && email !== "" && message !== ""){
            try {
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                setButton("Success!")
                setMessage("")
                setName("")
                setEmail("")
                setTimeout(() => {setButton("Send")},3000);
            } catch (error) {
                setButton("Failed!")
                setTimeout(() => {setButton("Send")})
            }
        }

    }

    return (
        <Section>
            <Title>Contact Me</Title>
            <ContactMeDiv>
                <Social>
                    <div>
                        <a href="https://github.com/kaualimaa" target="_blank"><GithubLogo size={36} weight="fill" /> GitHub</a>
                        <a href="https://www.linkedin.com/in/kaua-lima/" target="_blank"><LinkedinLogo size={36} weight="fill" /> LinkedIn</a>
                        <a href="https://www.instagram.com/kaualimadev/" target="_blank"><InstagramLogo size={36} weight="fill" /> Instagram</a>
                        <a href="https://twitter.com/kaualimadev" target="_blank"><TwitterLogo size={36} weight="fill" /> Twitter</a>
                        <a href="https://www.youtube.com/channel/UCrjwgVR-_e4tFPhOutC9F9A" target="_blank"><YoutubeLogo size={36} weight="fill" /> Youtebe</a>
                    </div>
                </Social>
                <EmailDiv>
                    <form id="form" onSubmit={sendEmail}>
                        <div>
                            <p>Full Name</p>
                            <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name}/>
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div>
                            <p>Message</p>
                            <textarea name="message" id="message" onChange={e => setMessage(e.target.value)} value={message}/>
                        </div>
                        <button type="submit">{button}</button>
                    </form>
                </EmailDiv>
            </ContactMeDiv>
        </Section>
    )
}