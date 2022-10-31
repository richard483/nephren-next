import styled from "styled-components";
import { COLORS } from "../../constants/style";
import Typed from "react-typed";

export const SuperWrapper = styled.div`
  height: 75vh;
  padding: 5rem 6rem 10rem;
  background-color: ${COLORS.onyx};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  h1 {
    font-size: 6rem;
    margin-bottom: 5rem;
    font-weight: 400;
    line-height: 7.5rem;
  }
  h3 {
    margin-top: -6rem;
    padding: 0;
    font-size: 2rem;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const Navbar = styled.a`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  border-bottom: 0.3rem solid ${COLORS.charcoal};
`;

export const CaptionWrapper = styled.h2``;

export const DynamicText = styled(Typed)`
  font-weight: 400;
  font-size: 2rem;
  line-height: 38px;
  color: ${COLORS.lightGray};
  border-bottom: 0.3rem solid ${COLORS.charcoal};
`;

export const ProfileWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  width: 87.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImageWrapper = styled.div`
  position: absolute;
  left: 23rem;
  width: 23rem;
  z-index: -1;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 5rem;
  bottom: 3rem;
`;
