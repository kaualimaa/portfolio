import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 50px;
    width: 100%;
    padding: 10px 25px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 1;
    background-color: var(--black);
    opacity: .95;
`;

export const Name = styled.div`
    font: normal normal 1.2rem "Poppins";
    color: var(--white)
`;

export const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: space-evenly;
`;

export const Button = styled.a`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font: bold normal .8rem "Poppins", sans-serif;
    color: var(--white);
    text-decoration: none;
    transition: .5s;
    padding: 5px 10px;

    &#resume {
        background-color: var(--blue);
        border-radius: 5px;
    }

    &#resume:hover {
        transform: scale(.95);
        color: var(--white);
        text-decoration: none;
        background-color: var(--light-blue);
    }

    &:hover {
        color: var(--cyan);
    }
`;