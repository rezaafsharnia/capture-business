import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #1b1b1b;
    font-family: "Inter" , sans-serif;
}

button{
    font-size: 1.1rem;
    font-weight:bold;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all ease .5s;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

h2{
    font-weight:lighter;
    font-size:4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
}

span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size:1.1rem;
    text-decoration: none;
    color: white;
}

p{
padding: .5rem 0rem;
color: #ccc;
font-size:1.4rem;
line-height: 150%;
}

`;

export default GlobalStyle;
