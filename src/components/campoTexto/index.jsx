import { styled } from "styled-components"
import search from '/images/search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    border-radius: 16px;
    box-sizing: border-box;
    width: fit-content;
`;


const CampoTextoEstilizado = styled.input`
    height: fit-content;
    padding: 0px 16px;
    border-radius: 10px;
    width: 566px;
    color: #D9D9D9;
    border-color: transparent;
    background-color: transparent;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    &::placeholder{
        color: #D9D9D9;
    }
`

const IconeLupa = styled.img`
    padding-right: 20px;
    width: 40px;
`;

const CampoTexto = ({ busca }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onKeyUp={ (event) => busca(event.target.value) } name="titulo" placeholder="O que você procura?" />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto