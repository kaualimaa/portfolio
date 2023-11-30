import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 98vh;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
`;

export const Name = styled.h1`
    font: normal normal 3.8rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
    @media only screen and (max-width: 900px) {
        font: normal normal 3.5rem "Poppins", sans-serif;
    }
    
    & p {
        transition: .5s;
        display: inline;
        color: var(--blue);
        
        &:hover {
            color: var(--cyan);
        }
    }
    `;

export const ShortDescription = styled.p`
    font: normal normal 2rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
    @media only screen and (max-width: 900px) {
        font: normal normal 1.7rem "Poppins", sans-serif;
    }
    
    & span {
        display: inline;
        color: var(--blue);
        transition: .5s;

        &:hover {
            color: var(--cyan);
        }
    }
`;

export const Links = styled.div`
    display: flex;
    height: 3rem;
    min-width: 20rem;
    width: 40%;
    justify-content: space-evenly;
    align-items: center;
`;

export const Link = styled.a`
    background-color: var(--white);
    padding: 5px 7px;
    border-radius: 50%;
    color: var(--gray);
    transition: .3s;

    &:hover {
        background-color: var(--cyan);
        color: var(--white);
    }
`;