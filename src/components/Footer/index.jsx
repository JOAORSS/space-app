import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import styled from "styled-components";

const FooterEstilizado = styled.footer`
    position: relative;
    margin-top: 80px;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 80px;
    background-color: #04244F;
    color: #FFF;
    font-family: GandhiSansRegular;
    p{
        margin-right: 3%;
    }
`

const RedesSociais = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    margin-left: 3%;
`

export default function Footer() {
    return (
        <FooterEstilizado>
            <RedesSociais>
                <MdOutlineFacebook size={28} color="#FFF" />
                <IoLogoTwitter size={28} color="#FFF" />
                <IoLogoInstagram size={28} color="#FFF" />
            </RedesSociais>
            <p>Desenvolvido por Alura.</p>
        </FooterEstilizado>
    )
}