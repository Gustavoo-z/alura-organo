import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

const CardContainer = styled.div`
    position: relative;
    width: 262px;
    height: 272px;
`

const CardHeader = styled.div`
    background-color:  ${props => props.corPrimaria};
    border-radius: 10px 10px 0px 0px;
    height: 92px;
`

const CardImage = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`

const CardFooter = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 60px;
    padding-bottom: 10px;
`

const CardTitle = styled.h4`
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

const CardSubtitle = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
`

const IconClose = styled(AiFillCloseCircle)`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`

export const Card = ({nome, imagem, cargo, corPrimaria, aoDeletar}) => {
    return (
        <CardContainer>
            <IconClose onClick={aoDeletar} />
            <CardHeader corPrimaria={corPrimaria}>
                <CardImage src={imagem} alt={`Foto do ` + nome}/>
            </CardHeader>
            <CardFooter>
                <CardTitle>{nome}</CardTitle>
                <CardSubtitle>{cargo}</CardSubtitle>
            </CardFooter>
        </CardContainer>
    )
}