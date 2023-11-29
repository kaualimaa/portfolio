import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { Section, Title, ProjectsDiv, Project } from "./style"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"


interface IRepo{
    id: string,
    name: string,
    html_url: string,
    description: string,
    topics: Array<string>,
}

interface IProjectCard{
    id: string,
    name: string,
    html_url: string,
    description: string,
}

function ProjectCard({ id, name, description, html_url}: IProjectCard){

    return (
        <Project key={id}>
            <img src={`https://raw.githubusercontent.com/kaualimaa/${name}/main/project-image.png`} alt={name} loading="lazy" />
            <div>
                <h1>{name.split("-").join(" ")}</h1>
                <span></span>
                <p>{description ? description : "No description..."}</p>

                <a href={html_url} target="_blank"><GithubLogo/> GitHub</a>
            </div>
        </Project>
    )
}

export function Projects(){

    const [repos, setRepos] = useState(Array<IRepo>);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("repos");
                const data = res.data;

                setRepos(data)
            } catch (error) {
                console.log("Error " + error)
            }
        };

        fetchData()
    });

    return (
        <Section id="projects">
            <Title>Projects</Title>
            <ProjectsDiv>
                {
                    repos.map(({ id, name, description, html_url, topics }: IRepo) => {
                        console.log(topics.includes("project"));
                        if (topics.includes("project")) {
                            return (
                                <ProjectCard key={id} id={id} name={name} description={description} html_url={html_url} topics={topics} />
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </ProjectsDiv>
        </Section>
    )
}