import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    top: 0;
    right: 0;
    padding: 2.4rem 16rem;
    gap: 2.4rem;
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 3;

    //background-color: gray;

    @media (max-width: 900px){
        padding: 2rem 4rem;
        gap: 0;
        justify-content: space-between;
    }

    @media (max-width: 480px){
        padding: 1.6rem;
        gap: 0;
        justify-content: space-between;
    }
`
export const Image = styled.img`
    height: 6rem;
    width: auto;

    @media (max-width: 800px){
        height: 4rem;
    }

`

