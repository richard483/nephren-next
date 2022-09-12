import styled from "styled-components";
import { COLORS } from "../../constants/style";

export const SuperWrapper = styled.div`
  background-color: ${COLORS.jet};
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
  text-align: center;
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
`;

export const AesBox = styled.div`
  /* height: 25rem;
  width: 1.5rem;
  background-color: ${COLORS.charcoal};
  margin: 25rem 6rem 0;
  float: left ;
  position: relative;
  z-index: 0; */
`;