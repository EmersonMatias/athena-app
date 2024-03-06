import { Heading1 } from "../ui/heading-1";
import { Heading2 } from "../ui/heading-2";
import Container, { Box1 } from "./style";

export default function Section1(){
    return(
        <Container>
       
            <Box1>
                <p className="phrase-1">VOCÊ ESTÁ PRONTO PARA ESTAR NO TOPO?</p>
               <Heading1>REVOLUCIONE</Heading1>
               <Heading2>SUA PRESENÇA DIGITAL</Heading2>
               <p className="phrase-2">SE POSICIONE NO MERCADO COM UM VISUAL ATRASTIVO E <span className="red">DOMINE O JOGO</span></p>
            </Box1>
        </Container>
    )
}