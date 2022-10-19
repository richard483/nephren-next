import styled from "styled-components";
import { COLORS } from "../../constants/style";
import { motion, AnimatePresence } from "framer-motion";

export const SuperWrapper = styled.div`
  overflow: hidden;
  background-color: ${COLORS.jet};
  position: relative;
`;

export const Wrapper = styled.div`
  white-space: pre-wrap;
  /* height: 50vh; */
  padding: 5rem 6rem 10rem;
  background-color: ${COLORS.lightGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
`;

export const TitleWrapper = styled.h2`
  color: ${COLORS.onyx};
  margin-bottom: 5rem;
  border-bottom: 0.3rem solid ${COLORS.silver};
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    /* position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; */
    max-width: 30vw;
  }
`;

export const PagingWrapper = styled.div`
  width: 300vw;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

//
