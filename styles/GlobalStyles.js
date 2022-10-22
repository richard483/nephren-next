import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/style";

const GlobalStyles = createGlobalStyle`
html{
  font-family: 'Electrolize';
  -ms-overflow-style: none;  /* IE and Edge */
  overflow: -moz-scrollbars-none; /* Firefox */
  ::-webkit-scrollbar { width: 0 !important } /* Chrome, Safari, Opera*/
}
h1 {
  color:${COLORS.lightGray};
  margin: 0;
  padding: 0;
}
h2{
  font-weight: 400;
  font-size: 3.5rem;
  text-align: center;
  color: ${COLORS.lightGray};
  margin: 0;
  padding: 0;
}
h3{
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  color: ${COLORS.lightGray};
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyles;
