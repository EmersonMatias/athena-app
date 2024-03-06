import * as Container from "./style"
import Logo from "../../assets/img/Logo.png"
import { Heading6 } from "../ui/heading-6"

export default function Header() {
    return (
        <Container.Header>
            <Container.Image src={Logo} />
            <>
                <Heading6>Inicio</Heading6>
                <Heading6>Cases</Heading6>
                <Heading6>Contato</Heading6>
            </>
        </Container.Header>
    )
}