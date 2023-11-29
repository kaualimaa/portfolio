import React from "react";
import { Section, Title, ToolsSection, LinkBox } from "./style"
import { FaPython, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";
import { SiTensorflow, SiPandas } from "react-icons/si";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";

interface IIconProps {
    icon: IconType;
}
interface IToolBox {
    icon: IconType;
    title: string;
    description: string;
    link: string;
}

const CustomIcon: React.FC<IIconProps> = ({ icon: Icon }) => {
    return <Icon size={36}/>
}

function ToolCard({icon, title, description, link }: IToolBox){
    return (
        <LinkBox href={link} target="_blank">
            <CustomIcon icon={icon}/>
            <h2>{title}</h2>
            <span></span>
            <p>{description}</p>
        </LinkBox>
    )
}
export function Tools(){
    return (
        <Section id="skills">
            <Title>Skills</Title>
            <ToolsSection>
                <ToolCard 
                    icon={FaPython} 
                    title="Python" 
                    description="Python is a high-level, general-purpose programming language known for its readability. Widely used for web development, automation, data science, and artificial intelligence, Python stands out for its clear syntax and extensive support community."
                    link="https://www.python.org/"
                />
                <ToolCard 
                    icon={SiTensorflow} 
                    title="TensorFlow" 
                    description="TensorFlow is an open-source library for machine learning and deep learning. Developed by Google, it provides tools and resources for efficiently building and training complex models, making it a popular choice for artificial intelligence projects."
                    link="https://www.tensorflow.org/"
                />
                <ToolCard 
                    icon={SiPandas} 
                    title="Pandas" 
                    description="Pandas is a data analysis library for Python. It simplifies the manipulation and analysis of datasets, offering flexible data structures (such as the DataFrame) and powerful functions for data transformations and cleaning."
                    link="https://pandas.pydata.org/"
                />
                <ToolCard 
                    icon={AiOutlineBoxPlot} 
                    title="Matplotlib" 
                    description="Matplotlib is a data visualization library in Python. It offers a wide variety of graphs and plots to represent data clearly and effectively, making it widely used in data analysis and visual presentations."
                    link="https://matplotlib.org/"
                />
                <ToolCard 
                    icon={FaGitAlt} 
                    title="Git" 
                    description="Git is a distributed version control system widely used in software development. It enables tracking changes in projects, efficient collaboration among developers, and easy rollback to previous versions."
                    link="https://git-scm.com/"
                />
                <ToolCard 
                    icon={FaDocker} 
                    title="Docker" 
                    description="Docker is a container virtualization platform that simplifies the development, deployment, and execution of applications. It allows packaging an application and its dependencies into a container to ensure consistency and portability across different environments."
                    link="https://www.docker.com/"
                />
                <ToolCard 
                    icon={BiLogoPostgresql} 
                    title="Postgres" 
                    description="PostgreSQL is an open-source relational database management system. Known for its reliability and advanced features, it is used to store and retrieve data in a variety of applications, ranging from small projects to complex systems."
                    link="https://www.postgresql.org/"
                />
                <ToolCard 
                    icon={FaLinux} 
                    title="Linux" 
                    description="Linux is an open-source operating system based on the Linux kernel. Widely used in servers, embedded devices, and development, Linux offers stability, security, and a variety of distributions catering to different needs."
                    link="https://www.linux.org/"
                />
            </ToolsSection>
        </Section>
    )
}