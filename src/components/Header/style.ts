import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    top: 0;
    right: 0;
    padding: 2rem 8rem;
    gap: 2.4rem;
    position: fixed;
    display: flex;
    align-items: center;
    //background-color: gray;

    @media (max-width: 1280px){
        padding: 1rem 4rem;
    }

    @media (max-width: 800px){
        padding: 1rem 3rem;
        gap: 0;
        justify-content: space-between;
    }

    @media (max-width: 480px){
        padding: 1rem;
        gap: 0;
        justify-content: space-between;
    }
`
export const Image = styled.img`
    height: 5rem;
    width: auto;

    @media (max-width: 800px){
        height: 4rem;
    }

    @media (max-width: 480px){
        height: 3rem;
    }
`

