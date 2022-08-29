import styled from "styled-components";
import { COLORS } from "../../constants/style";

export const SuperWrapper = styled.div`
  background-color: ${COLORS.charcoal};
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem 6rem 3rem;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    margin-bottom: 2rem;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 2rem;
`;

export const TextWrapper = styled.div`
  color: ${COLORS.lightGray};
  margin-bottom: 1rem;
`;

export const TitleWrapper = styled.h3`
  margin-bottom: 2rem;
`;

export const CreditWrapper = styled.div`
  color: ${COLORS.lightGray};
  text-align: center;
`;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 24px !important;
//   padding: 24px 24px;
//   background-color: ${white};

//   @media only screen and (max-width: 480px) {
//     box-shadow: none;
//     border: none;
//     padding: 0;
//   }
// `;

// export const Icon = styled.img`
//   width: 16px;
//   align-self: flex-start;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const Button = styled.button`
//   cursor: pointer;
//   margin-top: ${spacingXxl2};
//   width: 100%;
//   background-color: ${blue};
//   color: ${white};
//   padding: 15px 20px;
//   border-radius: 6px;
//   outline: none;
//   border: none;
//   font-family: "Montserrat";

//   &:hover {
//     background-color: #5a688b;
//   }

//   &:active {
//     background-color: #253254;
//   }
// `;
