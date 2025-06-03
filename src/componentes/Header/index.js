import styled from "styled-components"

const Banner = styled.header`
    text-align: center;
    background-color: #6278f7
`
const BannerImg = styled.img`
    max-width: 100%;
`

export const Header = () => {
    return (
        <Banner>
            <BannerImg src="../img/banner.png" alt="O banner principal da página do Organo"/>
        </Banner>
    )
}