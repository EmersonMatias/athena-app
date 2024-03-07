import styled from "styled-components";


interface LineProps {
    marginTop?: string,
    marginBottom?: string
}

export const GradientLine = styled.div<LineProps>`
    width: 100%;
    height: 5px;
    background-image: linear-gradient(45deg, #F6E121, #F57F1E, #E54C4C);
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
`