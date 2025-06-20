import styled from "styled-components";

export const Container = styled.div`
    margin: 24px 0;
`

export const Label = styled.label`
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
`

const Input = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;

    ${(props) =>
    props.type === "color" && `
    padding: 5px 24px;
    height: 50px;
  `}
`

export const Field = (props) => {

    return (
        <Container>
            <Label>
                {props.label}
            </Label>
            <Input
                type={props.type || "text"} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)}
            />
        </Container>
    )
}