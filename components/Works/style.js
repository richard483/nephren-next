import styled from "styled-components";
import { COLORS } from "../../constants/style";
import { motion, AnimatePresence } from "framer-motion";

export const SuperWrapper = styled.div`
  overflow: hidden;
  white-space: pre-wrap;
  height: 60vh;
  padding: 5rem 6rem 10rem;
  background-color: ${COLORS.lightGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TitleWrapper = styled.h2`
  color: ${COLORS.onyx};
  margin-bottom: 5rem;
  border-bottom: 0.3rem solid ${COLORS.silver};
`;

export const CarouselWrapper = styled.div`
  width: 90%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 50vh;
  }
`;

export const AesBoxWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 13rem;

  ${(props) =>
    props.pos == "left"
      ? `
    left: 0;
    bottom: 13rem;`
      : `
    right: 0;`}
`;

export const NavigationWrapper = styled.div`
  margin-bottom: 5rem;
  border-bottom: 0.3rem solid ${COLORS.silver};
  padding: 0 0.5rem; 
  font-size: 1.5rem;
  cursor: pointer;
`;
