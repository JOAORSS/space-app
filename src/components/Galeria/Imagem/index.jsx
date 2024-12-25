import { IoMdHeartEmpty, IoMdResize, IoMdHeart } from "react-icons/io";
import styled from "styled-components";

const CardFigura = styled.figure`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: ${({$expandida}) => ($expandida ? '90%' : '460px')};
    margin: 0px;
`

const CardImagem = styled.img`
    object-fit: fill;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
`

const CardInfo = styled.figcaption`
    background-color: #001634;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
    border-radius: 0px 0px 20px 20px;
`

const CardTitulo = styled.h3`
    width: fit-content;
    color: #FFF;
    margin: 0;
    font-size: 1.2rem;
`

const CardFonte = styled.p`
    width: fit-content;
    color: #FFF;
    font-size: 1rem;
    margin: 0;
`

const CardAcoes = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    position: absolute;
    bottom: 16px;
    right: 10px;
`

const CardBotaoAcoes = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
`


export default function Imagem({ foto, expandida = false, aoZoomChamado, onChangeFavorite }) {    
    return(
            <CardFigura $expandida={expandida} id={`foto-${foto.id}`}>
                <CardImagem src={foto.path} alt={foto.titulo} />
                <CardInfo>
                    <CardTitulo>{foto.titulo}</CardTitulo>
                    <CardFonte>{foto.fonte}</CardFonte>
                    <CardAcoes >
                        <CardBotaoAcoes 
                            onClick={() => onChangeFavorite(foto)}
                        >
                           { foto.favorito ?  <IoMdHeart color="#FFF" size={28}/> : <IoMdHeartEmpty color="#FFF" size={28}/>}
                        </CardBotaoAcoes>
                        {!expandida && 
                            <CardBotaoAcoes 
                                onClick={() => aoZoomChamado(foto)} 
                            >
                                <IoMdResize color="#FFF" size={24} />
                            </CardBotaoAcoes>}
                    </CardAcoes>
                </CardInfo>
        </CardFigura>
    )
}