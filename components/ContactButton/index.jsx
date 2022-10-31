import Link from "next/link";
import { AesBoxWrapper, ButtonWrapper } from "./style";

const Contactbutton = () => (
  <>
    <Link href="#footer">
      <ButtonWrapper>
        <AesBoxWrapper pos="left" />
        Contact me
        <AesBoxWrapper pos="right" />
      </ButtonWrapper>
    </Link>
  </>
);

export default Contactbutton;
