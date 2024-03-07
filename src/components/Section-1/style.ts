import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100dvh;
    padding: 0rem clamp(1.6rem, -1.723rem + 9.2308vw, 16rem) 0rem clamp(1.6rem, -1.723rem + 9.2308vw, 16rem) ;
    display: flex;
    flex-direction: column;  
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, ${props => props.theme.colors.black});
    }

    button{
        background-color: blue;
        z-index: 5;
        padding: 16px 32px;
        width: fit-content;
        border-radius: 8px;
        border: none;
        color: white;
        align-self: center;
        margin-top: 24px;
    }
`

export const Box1 = styled.div`
    //background-color: ${props => props.theme.colors.red};
    z-index: 5;

    .phrase-1{
        font-size: clamp(2rem, 1.2869rem + 0.8696vw, 2.4rem);
        font-weight: 500;
        margin-bottom: 1.6rem;
    }

    .phrase-2{
        font-size: clamp(1.8rem, 1.1653rem + 0.6522vw, 2rem);
        margin-top: 2.4rem;
        font-weight: 300;
    }

    @media screen and (max-width: 500px) {
    
    }
`

export const Box2 = styled.div`
    margin-top: 8rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 500px) {
        margin-top: 4rem;
    }
`
//2 - 8rem
export const AthenaImg = styled.img`
    height: 100vh;
    position: absolute;
    right: 45%;
    transform: translateX(50%);
    bottom: 0vh;
    overflow: hidden;
    opacity: 0.5;
`

export const LogoImg = styled.img`
    height: 6rem;
    width: auto;
    z-index: 5;
    position: fixed;
    transform: translateX(50%);
    right: 50%;
    top: 16px;
`
