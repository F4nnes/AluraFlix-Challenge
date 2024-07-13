

import CardBanner from "components/CardBanner";
import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 832px;
  margin: 0;
  max-width: 100%;
  background-size: cover;
`;


const Banner = ({ backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <CardBanner />
    </FigureEstilizada>
  );
};

export default Banner;
