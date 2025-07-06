import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #FFF;
    margin: 32px 0;

    &:hover {
        color: #95FFD4;
    }
`

interface ButtonProps {
    children: React.ReactElement | string;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}