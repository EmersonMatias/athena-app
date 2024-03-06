import styled from "styled-components";

export const Heading1 = styled.h1`
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
    font-size: clamp(3.2rem, 0.6957rem + 6.9565vw, 9.6rem);
    line-height: normal;
    font-weight: 600;
`