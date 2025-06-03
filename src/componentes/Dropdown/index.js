import styled from "styled-components";
import { Container, Label } from "../TextField";

const SelectDropdown = styled.select`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`

export const Dropdown = (props) => {
    return (
        <Container>
            <Label>
                {props.label}
            </Label>
            <SelectDropdown required={props.obrigatorio}>
                {props.itens.map(item => { 
                    return <option key={item}>{item}</option>
                })}
            </SelectDropdown>
        </Container>    
    )
}