import styled from "styled-components";

const FooterContainer = styled.footer`
    max-width: 100%;
    background-color: #6278f7;
    display: flex;
    justify-content: space-between;
    background-image: url("../../img/fundo.png");
    background-size: cover;
    padding: 80px;
    align-items: center;
`

const DivRedesSociais = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
    }
`

const DivTexto = styled.div`
    color: #fff;
    font-family: "Prata", serif;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    align-items: center;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <DivRedesSociais>
                <img src="../../img/fb.png" alt="Facebook"></img>
                <img src="../../img/tw.png" alt="Twitter"></img>
                <img src="../../img/ig.png" alt="Instagram"></img>
            </DivRedesSociais>
            <div>
                <img src="../../img/logo.png" alt="Logo"></img>
            </div>
            <DivTexto>
                <p>Desenvolvido por Alura.</p>
            </DivTexto>
        </FooterContainer>
    )
}