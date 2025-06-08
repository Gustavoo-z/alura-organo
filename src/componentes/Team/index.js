import styled from "styled-components";
import { Card } from "../Card";

const TeamContainer = styled.section`
    position: relative;
    text-align: center;
    padding: 32px 32px 64px 32px;
    background-image: url("../../img/fundo.png");
    background-color: ${props => props.corSecundaria};
`

const TeamDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const TeamTitle = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid ${props => props.corPrimaria};
    display: inline-block;
    padding-bottom: 8px;
    margin-top: 0;
`

const InputColor = styled.input`
    right: 50px;
    top: 40px;
    position: absolute;
`

export const Team = (props) => {
    return (
        (props.colaboradores.length > 0) && <TeamContainer corSecundaria={props.corSecundaria}>
            <TeamTitle corPrimaria={props.corPrimaria}>{props.time}</TeamTitle>
            <InputColor type="color" value={props.corPrimaria} onChange={e => props.mudarCor(e.target.value, props.time)}></InputColor> 
            <TeamDiv>
                {props.colaboradores.map(colaborador => 
                    <Card 
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo} 
                        corPrimaria={props.corPrimaria} 
                        key={colaborador.nome}
                        aoDeletar={props.aoDeletar}>
                    </Card>)}
            </TeamDiv>
        </TeamContainer>
    )
}