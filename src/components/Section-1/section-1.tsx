import { Heading1, Heading1Thin } from "../ui/heading-1";
import { Heading2 } from "../ui/heading-2";
import { Box1, AthenaImg, Container, Box2, LogoImg } from "./style";
import Athena from "../../assets/img/Athena.png"
import Logo from "../../assets/img/Logo.png"
import { Heading4Thin } from "../ui/heading-4";
import { GradientLine } from "../ui/line";

export default function Section1() {
    return (
        <Container>
            <LogoImg src={Logo}/>

            <Box1>
                <p className="phrase-1">VOCÊ ESTÁ PRONTO PARA ESTAR NO TOPO?</p>
                <Heading1>REVOLUCIONE</Heading1>
                <Heading2>SUA PRESENÇA DIGITAL</Heading2>
                <p className="phrase-2">SE POSICIONE NO MERCADO COM UM VISUAL ATRASTIVO E <span className="red">DOMINE O JOGO</span></p>
            </Box1>

            <Box2>
                <Heading1Thin>athena</Heading1Thin>
                <Heading4Thin>SITES • SISTEMAS • MARKETING DIGITAL</Heading4Thin>
                <GradientLine marginTop="2.4rem"/>
            </Box2>

                <button>sadasdsdas</button>


            <AthenaImg src={Athena} />


        </Container>
    )
}