import styled from "styled-components";
import { COLORS } from "../../constants/style";

export const SuperWrapper = styled.div`
  background-color: ${COLORS.jet};
  position: relative;
`;

export const Wrapper = styled.div`
  white-space: pre-wrap;
  padding: 5rem 6rem 10rem;
  background-color: ${COLORS.jet};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleWrapper = styled.h2`
  color: ${COLORS.lightGray};
  margin-bottom: 5rem;
  border-bottom: 0.3rem solid ${COLORS.charcoal};
`;

export const ContentWrapper = styled.div`
  color: ${COLORS.silver};
  padding: 0 10rem;
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AesBox = styled.div`
  height: 20rem;
  width: 1.5rem;
  background-color: ${COLORS.charcoal};
  position: absolute;
  left: 6rem;
  bottom: 0;
  z-index: 1;

  @media (max-width: 768px) {
    left: 3rem
    
  }
`;