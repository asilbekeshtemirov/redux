import styled from "styled-components";

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 620px;
    height: 705px;
    gap: 13px;

    & input,& select{
        height: 58px;
        border: none;
        background-color: #f2f2f2;
        border-radius:10px;
        display: inline-block;
        padding: 10px;
    }

    & label{
        font-weight: 400;
        size: 16px;
    }

    & textarea{
        border: none;
        background-color: #f2f2f2;
        border-radius:10px;
        height: 164px;
    }

    & button{
        width: 180px;
        height: 46px;
        border-radius:5px;
        background-color: rgba(69, 69, 69, 1);
        border: none;
        color: white;
    }
`