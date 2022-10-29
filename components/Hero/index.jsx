import {
  CaptionWrapper,
  DynamicText,
  Navbar,
  NavbarContent,
  NavbarWrapper,
  SuperWrapper,
  TitleWrapper,
} from "./style";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <SuperWrapper>
        <NavbarWrapper>
          <NavbarContent>
            <Link href="#myWorks">
              <Navbar>my works</Navbar>
            </Link>
            <Link href="#aboutMe">
              <Navbar>about me</Navbar>
            </Link>
          </NavbarContent>
        </NavbarWrapper>
        <TitleWrapper>
          <h1>
            Richard
            <br />
            William
          </h1>
          <h3>-nephren-</h3>
        </TitleWrapper>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <CaptionWrapper>"Im still learning"</CaptionWrapper>
        <DynamicText
          strings={[
            "Software Developer",
            "Back End",
            "Front End (?)",
            "Android Studio",
            "A little bit of python",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </SuperWrapper>
    </>
  );
};

export default Hero;
