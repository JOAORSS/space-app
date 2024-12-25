import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "../Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleiriaConteiner = styled.div`
    display: flex;
    width: 100%;
`

const SecsaoFluida = styled.section`
    flex-grow: 1;
    h2{
        white-space: nowrap;
    }
`

const ListaImagens = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px;
    gap: 24px;
`

const ItemLista = styled.li`
    width: fit-content;
    list-style: none;
`

export default function Galeria({ fotos = [], tags, aoFotoSelecionada, onChangeFavorite, onChangeTag }) {
    return(
        <>
            <Tags tags={tags} onChangeTag={onChangeTag} />
            <GaleiriaConteiner>
                <SecsaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaImagens>
                        {fotos.map(foto => {
                            return(
                            <ItemLista
                                key={foto.id}
                            >
                                <Imagem
                                    onChangeFavorite={onChangeFavorite}
                                    aoZoomChamado={(foto) => aoFotoSelecionada(foto)}
                                    foto={foto}
                                />
                            </ItemLista>)})}
                    </ListaImagens>
                </SecsaoFluida>
                <Populares />
            </GaleiriaConteiner>
        </>
    )
}
