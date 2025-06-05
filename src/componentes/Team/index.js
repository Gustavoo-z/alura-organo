import styled from "styled-components";

const TeamContainer = styled.section`
    text-align: center;
    padding: 32px;
    background-color: ${props => props.corSecundaria};
`
const TeamTitle = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid ${props => props.corPrimaria};
    display: inline-block;
    padding-bottom: 8px;
`

export const Team = (props) => {
    return (
        <TeamContainer corSecundaria={props.corSecundaria}>
            <TeamTitle corPrimaria={props.corPrimaria}>{props.time}</TeamTitle>
        </TeamContainer>
    )
}