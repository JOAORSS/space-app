import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const AsideEstilizado = styled.aside`
    max-width: 212px;
`

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    display: flex;
    flex-direction: column;
`



export default function BarraLateral() {
    return (
        <AsideEstilizado>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo={"/icon/home-ativo.png"}
                        iconeInativo={"/icon/home-inativo.png"}
                    >
                        Incio
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={"/icon/mais-curtidas-ativo.png"}
                        iconeInativo={"/icon/mais-curtidas-inativo.png"}
                    >
                        Mais visitadas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={"/icon/mais-vistas-ativo.png"}
                        iconeInativo={"/icon/mais-vistas-inativo.png"}
                    >
                        Mais curtida
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={"/icon/novas-ativo.png"}
                        iconeInativo={"/icon/novas-inativo.png"}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={"/icon/surpreenda-me-ativo.png"}
                        iconeInativo={"/icon/surpreenda-me-inativo.png"}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </AsideEstilizado>
    )
}