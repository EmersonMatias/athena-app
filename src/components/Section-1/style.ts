import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 100dvh;
    padding: 0rem clamp(1.6rem, -1.723rem + 9.2308vw, 16rem);
    display: flex;
    flex-direction: column;  
`

export const Box1 = styled.div`
    //background-color: ${props => props.theme.colors.red};
    margin-top: 30vh;

    .phrase-1{
        font-size: clamp(1.6rem, 1.2869rem + 0.8696vw, 2.4rem);
        //1.6 - 2.4
        font-weight: 500;
        margin-bottom: 3.2rem;
    }

    .phrase-2{
        font-size: clamp(1.4rem, 1.1653rem + 0.6522vw, 2rem);
        //1.4 - 2
        margin-top: 3.2rem;
        font-weight: 500;
    }
`

export default Container