import styled from "styled-components";

const DestaqueStyled = styled.div`
    background-image: url('images/destaque.png');
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    justify-content: left;
    align-items: center;
    height: 328px;
    border-radius: 20px;
    width: 100%;
    background-size: cover;
    h1{
        color: #FFFFFF;
        font-family: GandhiSansRegular;
        font-size: 40px;
        margin-left: 5%;
        width: 301px;
        font-weight: 200;
    }
`

export default function Destaque() {
    return(
        <DestaqueStyled>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </DestaqueStyled>
    )
}