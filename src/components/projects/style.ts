import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 17px;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--black);
`;

export const Title = styled.h1`
    font: normal bold 3rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
`;

export const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* align-items: ; */
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
`;

export const Project = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: start;
    min-height: 40rem;
    width: 30rem;
    background-color: var(--gray);
    border-radius: 10px;
    margin: 20px 0;
    overflow-y: scroll;
    
    & img {
        aspect-ratio: 16/10;
        width: 100%;
        border-radius: 10px 10px 0 0;
        margin-bottom: 10px;
    }

    & div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: start;
        align-items: center;
        padding: 10px 10px;
    }

    & div h1 {
        font: normal bold 1.3rem "Poppins", sans-serif;
        text-align: center;
        color: var(--white);
        margin: 0;
    }

    & div span {
        display: block;
        height: 2px;
        width: 90%;
        background-color: var(--white);
        margin: 5px 0 20px 0;
        border-radius: 10px;
    }

    & div p {
        font: normal normal 1.05rem "Poppins", sans-serif;
        text-align: left;
        color: var(--white);

        &::after {
            content: ".";
        }
        
    }

    & div a {
        position: absolute;
        bottom: 20px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--light-blue);
        color: var(--white);
        text-decoration: none;
        font: normal normal 1.2rem "Poppins", sans-serif;
        transition: .4s;

        &:hover {
            background-color: var(--cyan);
            color: var(--blue);
        }
    }
`;