import styled from "styled-components";
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { Card } from "../Card";

const TeamContainer = styled.section<CorProps>`
    position: relative;
    text-align: center;
    padding: 32px 32px 64px 32px;
    background-image: url("../../img/fundo.png");
    background-color: ${props => hexToRgba(props.cor, '0.6')};
`

const TeamDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const TeamTitle = styled.h3<CorProps>`
    font-size: 32px;
    border-bottom: 4px solid ${props => props.cor};
    display: inline-block;
    padding-bottom: 8px;
    margin-top: 0;
`

const InputColor = styled.input`
    right: 50px;
    top: 40px;
    position: absolute;
`

interface TeamProps {
    cor: string
    time: string
    id: number
    mudarCor: (cor: string, id: number) => void
    aoDeletar: (id: number) => void
    aoFavoritar: (id: number) => void
    colaboradores: IColaborador[]
}

export interface CorProps {
  cor: string;
}

export const Team = (props: TeamProps) => {
    return (
        (props.colaboradores.length > 0) && 
        <TeamContainer cor={props.cor}>
            <TeamTitle cor={props.cor}>{props.time}</TeamTitle>
            <InputColor type="color" value={props.cor} onChange={e => props.mudarCor(e.target.value, props.id)}></InputColor> 
            <TeamDiv>
                {props.colaboradores.map(colaborador => 
                    <Card
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo} 
                        cor={props.cor} 
                        key={colaborador.id}
                        id={colaborador.id}
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                        favorito={colaborador.favorito}
                        >
                    </Card>)}
            </TeamDiv>
        </TeamContainer>
    )
}