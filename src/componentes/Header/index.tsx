import styled from "styled-components";
import React from "react";

const Banner = styled.header`
    text-align: center;
    background-color: #6278f7;
`

const BannerImg = styled.img`
    max-width: 100%;
`

interface HeaderProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Header = ({ enderecoImagem, textoAlternativo } :HeaderProps) => {
    return (
        <Banner>
            <BannerImg src={enderecoImagem} alt={textoAlternativo}/>
        </Banner>
    )
}