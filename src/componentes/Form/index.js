import styled from "styled-components";
import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { useState } from "react";

const Container = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0
`

const FormContainer = styled.form`
    width: 80%;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
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
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
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
        </Container>
    )
}