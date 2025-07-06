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

interface FieldProps {
    label: string;
    obrigatorio?: boolean;
    placeholder?: string;
    type?: string;
    valor: string;
    aoAlterado: (valor: string) => void;
}

export const Field = ({ aoAlterado, label, placeholder, type, valor, obrigatorio = false }: FieldProps) => {

    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Input
                type={type || "text"} 
                required={obrigatorio} 
                placeholder={placeholder}
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)}
            />
        </Container>
    )
}