import styled from "styled-components";
import { TextField } from "../TextField";

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
    return(
        <Container>
            <FormContainer>
                <FormTitulo>Preencha os dados para criar o card do colaborador</FormTitulo>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
            </FormContainer>
        </Container>
    )
}