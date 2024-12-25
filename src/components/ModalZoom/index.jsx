import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { IoMdClose } from "react-icons/io";

const DialogStyled = styled.dialog`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    position: absolute;
    max-width: 1156px;
    max-height: 740px;
    padding: 0%;
    margin: 0 auto;
    width: 100%;
    top: 294px;
    font-family: GandhiSansRegular;
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
`

const CloseButton = styled.div`
    position: absolute;
    top: 24px;
    right: 6%;
    cursor: pointer;
`

export default function ModalZoom ({ foto, aoFotoSelecionada, onChangeFavorite }) {

    return (
        <>
        { foto &&
            <>
                <Overlay />
                <DialogStyled id="dialogBox" open={!!foto}>
                    <CloseButton onClick={() => aoFotoSelecionada(!foto)}><IoMdClose color="#FFF" size={32} /></CloseButton>
                    <Imagem onChangeFavorite={onChangeFavorite} foto={foto} expandida={true} />
                </DialogStyled>
            </>
        }
        </>
    );
}