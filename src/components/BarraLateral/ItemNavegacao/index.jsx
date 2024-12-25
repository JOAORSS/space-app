import styled from "styled-components";

const ItemListaEstilizada = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 15px;
    color: ${({ $ativo }) => $ativo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${({ $ativo }) => $ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
`

export default function ItemNavegacao ({ children, iconeAtivo, iconeInativo, ativo = false }) {
    return(
        <ItemListaEstilizada $ativo={ativo} >
            <img src={ativo ? iconeAtivo : iconeInativo} alt="imagem da pagina" />
            {children}
        </ ItemListaEstilizada>
    )
}