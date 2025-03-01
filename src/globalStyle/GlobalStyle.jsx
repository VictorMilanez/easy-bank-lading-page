import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body {
        margin: 0 auto;
        height: 100vh;
        max-width: 1440px;
        font-family: "Public Sans", serif;
        overflow-x: hidden;
        position: relative;
    }

`