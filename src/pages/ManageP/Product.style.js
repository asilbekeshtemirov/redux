import styled from 'styled-components'

export const CardWrapper = styled.div`
    padding: 15px;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        & button {
            width: 55px;
            height: 33px;
            border-radius:100px;
            border: 1px solid rgba(69, 69, 69, 1);
            cursor: pointer;
        }
    }

    & > div:nth-of-type(2) {
        align-items: center;
    }
`;

export const Wrapper = styled.div`
        flex-wrap:wrap;
        justify-content: center;
`
