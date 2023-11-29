import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :root {
        --black: #161c25;
        --black2: #1d2430;
        --gray: #344054;
        --blue: #34669c;
        --light-blue: #338be3;
        --cyan: #75b0ec;
        --white: #f5f5f5;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    a, p, h1, span , input, textarea{
        &::selection {
            background-color: var(--cyan);
            color: var(--black);
        }
    }
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: var(--black);
    overflow-y: hidden;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    z-index: 0;

    & section {
        padding: 20px 10px;
    }
`;