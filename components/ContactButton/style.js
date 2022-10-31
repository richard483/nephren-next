import styled from "styled-components";
import { COLORS } from "../../constants/style";


export const ButtonWrapper = styled.div`
  position: absolute;
  right: 15rem;
  bottom: 10rem;
  width: 16rem;
  height: 8rem;
  background-color: ${COLORS.silver};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${COLORS.charcoal};
  cursor: pointer;
  z-index: 10;
`;

export const AesBoxWrapper = styled.div`
  height: 16rem;
  width: 8rem;
  background: rgba(255, 248, 248, 0.5);
  position: absolute;
  ${(props) =>
    props.pos == "left"
      ? `left: 0;
  bottom: -16rem;`
      : `right: 0;
  top: -16rem;`}

`;
