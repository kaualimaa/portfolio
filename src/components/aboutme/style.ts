import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 95vh;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--black2);
`;

export const Title = styled.h1`
    font: normal bold 3rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
    margin-bottom: 10px;
`;

export const AboutMeDiv = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const Picture = styled.img`
    width: 29rem;
    height: 28rem;
    border-radius: 50%;
    padding: 20px;
    border: 1px solid var(--light-blue);
    margin-right: 1rem;
    transition: .5s;
    
    &:hover {
        border: 1px solid var(--cyan);
        transform: scale(1.1);
    }
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;

    & p {
        font: normal normal 1.05rem "Poppins", sans-serif;
        color: var(--white);
        text-align: justify;
    }

    & a {
        height: 40px;
        width: fit-content;
        text-decoration: none;
        font: normal bold 1rem "Poppins", sans-serif;
        text-align: center;
        color: var(--white);
        background-color: var(--light-blue);
        padding: 10px 20px;
        border-radius: 5px;
        margin: 30px auto 0 auto;
        transition: .4s;

        &:hover {
            background-color: var(--cyan);
            color: var(--blue);
        }
}
`;