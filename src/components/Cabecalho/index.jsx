import styled from "styled-components"
import CampoTexto from "../campoTexto"


const HeaderStyled = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    gap: 48px;
    img{
        max-width: 212px;
    }
`

export default function Cabecalho({busca}) {
    return (
        <HeaderStyled>
            <img src="images/logo.png" />
            <CampoTexto busca={busca} />
        </HeaderStyled>
    )
}