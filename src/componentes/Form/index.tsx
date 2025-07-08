import styled from "styled-components";
import { Field } from "../Field";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { useState } from "react";
import { IColaboradorBase } from "../../shared/interfaces/IColaborador";
import { CorProps } from "../Team";

const Container = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0 0 0;
    flex-wrap: wrap;
`

const FormContainer = styled.form`
    flex: 1;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    margin: 32px;
`

const FormTitulo = styled.h2<CorProps>`
    font-family: "Prata", serif;
    font-weight: 300;
    font-size: 32px;
    color: ${props => props.cor || "#000"};
`

const ButtonForm = styled.div`
    position: relative;
    height: 180px;
    text-align: center;
    align-items: center;
`

const ButtonFormImage = styled.img`
    position: absolute;
    right: 60px;
    width: 100px;
    height: 100px;
    top: 40px;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`

interface FormProps {
    times: string[];
    colaborador: (colaborador: IColaboradorBase) => void;
    aoDeletar?: (id: number) => void
    aoFavoritar?: (id: number) => void;
    criarNovoTime: (time: { nomeTime: string; corTime: string }) => void;
}

export const Form = (props: FormProps) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState(props.times[0])
    const [data, setData] = useState("")

    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("")

    const aoAdicionarColaborador = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.colaborador({nome, cargo, imagem, time, data})
        setNome("")
        setCargo("")
        setImagem("")
        setData("")
        setTime(props.times[0])
    }

    const manipularContainer = () => {
        const container = document.querySelector('.container') as HTMLDivElement;
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    }

    return(
        <>
        <Container className="container" style={{display: "flex"}}>
            <FormContainer onSubmit={aoAdicionarColaborador}>
                <FormTitulo cor="">Preencha os dados para criar o card do colaborador</FormTitulo>
                <Field 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Field 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Field
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}         
                    aoAlterado={valor => setImagem(valor)}
                 />
                 <Field
                    label="Data de entrada" 
                    placeholder=""
                    valor={data}         
                    aoAlterado={valor => setData(valor)}
                    type="date"
                    obrigatorio
                 />
                <Dropdown 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>Criar Card</Button>
            </FormContainer>
            <FormContainer onSubmit={(evento) => {
                evento.preventDefault()
                props.criarNovoTime({ nomeTime, corTime })
                setNomeTime("")
                setCorTime("")
            }}>
                <FormTitulo cor="">Preencha os dados para criar um novo time</FormTitulo>
                <Field 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Field 
                    type="color"
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}         
                    aoAlterado={valor => setCorTime(valor)}
                 />
                <Button>Criar Time</Button>
            </FormContainer>
        </Container>
        <ButtonForm>
            <FormTitulo cor="" style={{color: "#6278F7", borderBottom: "2px solid #6278F7", display: "inline-block", paddingBottom: "8px", marginTop: "60px"}}>Minha Organização:</FormTitulo>
            <ButtonFormImage onClick={manipularContainer} src="../../img/ButtonForm.png" alt="ButtonForm"></ButtonFormImage>
        </ButtonForm>
        </>
    )
}