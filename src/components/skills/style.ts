import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--black2);
`;

export const Title = styled.h1`
    font: normal bold 3rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
    `;

export const ToolsSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

export const LinkBox = styled.a`
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 18rem;
    min-width: 23rem;
    max-width: 20%;
    max-height: 30%;
    text-decoration: none;
    color: var(--white);
    font-family: "Poppins", sans-serif;
    border-radius: 15px;
    padding: 20px;
    margin: 10px 0;
    background-color: var(--gray);
    transition: .4s;

    @media only screen and (max-width: 700px) {
        min-width: 320px;
    }

    & h2 {
        font-size: 1.2rem;
        margin: 10px 0 5px 0;
    }

    & span {
        display: block;
        height: 4px;
        width: 60%;
        background-color: var(--white);
        margin: 0 0 10px 0;
        border-radius: 10px;
    }

    & p {
        margin: 5px 0 0 0;
        text-align: start;
        font-size: .85rem;
    }
`;