import styled from "styled-components";

const TituloEstilizado = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    font-family: GandhiSansRegular;
    text-align: ${({ $alinhamento }) => $alinhamento ? $alinhamento : "left"};
    align-self: center;
    width: fit-content;
`;

export default function Titulo({children, alinhamento}) {
    return(
        <TituloEstilizado $alinhamento={alinhamento} >{children}</TituloEstilizado>
    )
}