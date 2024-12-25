import styled from "styled-components";
import Titulo from "../../Titulo";

const PopularesSecao = styled.section`
    display: flex;
    position: relative;
    right: 0;
    flex-direction: column;
    width: fit-content;
    align-items: flex-end;
`

const PopularImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    img{
        flex: 1;
        width: 100%;
        max-width: 212px;
        max-height: 158px;
        width: 100%;
        border-radius: 16px;
    }
`

const BotaoPopular = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #7B78E5;
    padding: 14px 24px;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 300ms;
    &:hover{
        background: linear-gradient(90deg, rgba(201,140,241,1) 20%, rgba(123,120,229,1) 80%); 
    }
`

export default function Populares() {
    return (
        <PopularesSecao>
            <Titulo alinhamento="center" >Populares</Titulo>
            <PopularImages>
                <img src="/images/popular/Populares (1).png" alt="Popular" />
                <img src="/images/popular/Populares (2).png" alt="Popular" />
                <img src="/images/popular/Populares (3).png" alt="Popular" />
                <img src="/images/popular/Populares (4).png" alt="Popular" />
                <img src="/images/popular/Populares (5).png" alt="Popular" />
                <BotaoPopular>Ver mais</BotaoPopular>
            </PopularImages>
        </PopularesSecao>
)
}

