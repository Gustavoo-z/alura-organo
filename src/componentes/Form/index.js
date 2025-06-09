import styled from "styled-components";
import { Field } from "../Field";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { useState } from "react";

const Container = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
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

const FormTitulo = styled.h2`
    font-family: "Prata", serif;
    font-weight: 300;
    font-size: 32px;
`

export const Form = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState(props.times[0])

    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("")

    const aoAdicionarColaborador = (e) => {
        e.preventDefault()
        props.colaborador({nome, cargo, imagem, time})
        setNome("")
        setCargo("")
        setImagem("")
        setTime(props.times[0])
    }

    return(
        <Container>
            <FormContainer onSubmit={aoAdicionarColaborador}>
                <FormTitulo>Preencha os dados para criar o card do colaborador</FormTitulo>
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
                <FormTitulo>Preencha os dados para criar um novo time</FormTitulo>
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
    )
}