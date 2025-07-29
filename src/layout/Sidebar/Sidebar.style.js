import styled from "styled-components";

export const SidebarWrapper = styled.div`
    height: 100vh;
    width: 400px;
    padding:20px;
    background-color: rgba(69, 69, 69, 1);
    position: sticky;
    top: 0%;
    & a{
        text-decoration:none;
        color:white
    }
    & a:active{
        background-color: black;
    }
`

export const Word = styled.h1`
    height: 28px;
    font-weight:600;
`