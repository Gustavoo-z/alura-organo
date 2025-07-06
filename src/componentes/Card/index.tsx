import styled from "styled-components";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CorProps } from "../Team";

const CardContainer = styled.div`
  position: relative;
  width: 262px;
  height: 272px;
`;

const CardHeader = styled.div<CorProps>`
  background-color: ${(props) => props.cor};
  border-radius: 10px 10px 0px 0px;
  height: 92px;
`;

const CardImage = styled.img`
  width: 100px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
`;

const CardFooter = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 60px;
  padding-bottom: 10px;
`;

const CardTitle = styled.h4`
  color: #6278f7;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardSubtitle = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
  margin: 16px 16px 8px 16px;
`;

const IconClose = styled(AiFillCloseCircle)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const IconHeart = styled(AiFillHeart)`
  width: 25px;
  height: 25px;
  color: #ff0000;
  cursor: pointer;
`;

const IconHeartOutline = styled(AiOutlineHeart)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

interface CardProps {
  nome: string;
  imagem: string;
  cargo: string;
  cor: string;
  id: number;
  favorito: boolean;
  aoDeletar: (id: number) => void;
  aoFavoritar: (id: number) => void;
}

export const Card = ({
  nome,
  imagem,
  cargo,
  cor,
  id,
  favorito,
  aoDeletar,
  aoFavoritar,
}: CardProps) => {
  function favoritar() {
    aoFavoritar(id);
  }

  return (
    <CardContainer>
      <IconClose onClick={() => aoDeletar(id)} />
      <CardHeader cor={cor}>
        <CardImage src={imagem} alt={`Foto do ` + nome} />
      </CardHeader>
      <CardFooter>
        <CardTitle>{nome}</CardTitle>
        <CardSubtitle>{cargo}</CardSubtitle>
        <div>
          {favorito ? (
            <IconHeart onClick={favoritar} />
          ) : (
            <IconHeartOutline onClick={favoritar} />
          )}
        </div>
      </CardFooter>
    </CardContainer>
  );
};
