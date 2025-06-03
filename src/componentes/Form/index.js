import styled from "styled-components";
import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";

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

export const Form = () => {

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    return(
        <Container>
            <FormContainer onSubmit={(e) => {
                e.preventDefault()
                console.log("Form enviado")
                }}>
                <FormTitulo>Preencha os dados para criar o card do colaborador</FormTitulo>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem"/>
                <Dropdown obrigatorio={true} label="Time" itens={times}></Dropdown>
                <Button>Criar Card</Button>
            </FormContainer>
        </Container>
    )
}