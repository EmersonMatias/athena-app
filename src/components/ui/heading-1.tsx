import styled from "styled-components";

export const Heading1 = styled.h1`
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
    font-size: clamp(4rem, 0.6957rem + 6.9565vw, 9.6rem);
    line-height: normal;
    font-weight: 600;
`

export const Heading1Thin = styled(Heading1)`
    width: fit-content;
    font-weight: 100;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(45deg, #F6E121, #F57F1E, #E54C4C);
`