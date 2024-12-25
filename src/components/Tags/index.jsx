import styled from 'styled-components';

const TagsConteiner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 2%;
`

const TagTitulo = styled.h2`
        font-size: 1.5rem;
        color: #FFF;
        margin-right: 4%;
        font-weight: 400;
`

const TagBotao = styled.button`
    cursor: pointer;
    padding: 8px 16px;
    background-color: #d9d9d947;
    color: #FFF;
    border: none;
    font-size: 1.5rem;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    border: 3px solid ${({ $ativo }) => $ativo ? '#7B78E5' : 'transparent'};
`

export default function Tags({ tags, onChangeTag }) {
    return(
        <TagsConteiner>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => (
                <TagBotao 
                    onClick={() => onChangeTag(tag.id)} 
                    key={tag.id} 
                    $ativo={tag.selected}
                >
                    {tag.titulo}
                </TagBotao>
            ))}
        </TagsConteiner>
    )
}