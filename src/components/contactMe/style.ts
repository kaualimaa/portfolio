import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 65vh;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 700px) {
        min-height: 160vh;
        font: normal normal .9rem "Poppins", sans-serif;
    }
`;

export const Title = styled.h1`
    font: normal bold 3rem "Poppins", sans-serif;
    color: var(--white);
    text-align: center;
    
    @media only screen and (max-width: 900px) {
        font: normal bold 2rem "Poppins", sans-serif;
    }
`;

export const ContactMeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    min-width: 90%;
    max-width: 100%;
    background-color: var(--black2);
    border-radius: 10px;
    padding: 0 20px;

    @media only screen and (max-width: 500px) {
        min-height: 150vh;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
`;

export const Social = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }

    & div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }

    & div a {
        display: flex;
        background-color: var(--white);
        padding: 10px 20px;
        color: var(--gray);
        transition: .3s;
        font: normal bold 1.5rem "Poppins", sans-serif;
        text-align: center;
        align-items: center;
        text-decoration: none;
        width: 200px;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 5px;

        &:hover {
            background-color: var(--cyan);
            color: var(--white);
        }
    }
    `;

export const EmailDiv = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }

    & form {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
        justify-content: center;
        align-items: center;

        & div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;
            
            & p {
                font: normal normal 1.1rem "Poppins", sans-serif;
                color: var(--white);
                text-align: left;
                margin-bottom: 5px;
            }
            
            & input, textarea {
                background: none;
                height: 50px;
                padding: 10px 20px;
                border-radius: 10px;
                border: 2px solid var(--white);
                font: normal normal 1.1rem "Poppins", sans-serif;
                color: var(--white);
                text-align: left;

                &#message {
                    min-height: 150px;
                    max-height: 250px;
                    caret-color: var(--cyan);
                    resize: none;
                    overflow-y: scroll;
                }
            }
            
        }
        
        & button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            height: 50px;
            background: var(--blue);
            margin: 20px auto 0 auto;
            border: none;
            border-radius: 10px;
            padding: 10px;
            font: normal normal 1.6rem "Poppins", sans-serif;
            color: var(--white);
            text-align: center;
            transition: .4s;

            &:hover {
                background-color: var(--cyan);
                color: var(--blue);
            }
        }
    }
`;