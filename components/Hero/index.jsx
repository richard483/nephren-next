import {
  AesBoxWrapper,
  ButtonWrapper,
  CaptionWrapper,
  DynamicText,
  IconWrapper,
  Navbar,
  NavbarContent,
  NavbarWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  SuperWrapper,
  TitleWrapper,
  Wrapper,
} from "./style";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <SuperWrapper>
        <ProfileImageWrapper>
          <Image
            src="/images/profile.png"
            alt="profile-picture"
            width={305}
            height={630}
          />
        </ProfileImageWrapper>
        <Wrapper>
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
          <ProfileWrapper>
            <TitleWrapper>
              <h1>
                Richard
                <br />
                William
              </h1>
              <h3>-nephren-</h3>
            </TitleWrapper>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <CaptionWrapper>"Live, Eat, Sleb"</CaptionWrapper>
          </ProfileWrapper>
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
        </Wrapper>
        <IconWrapper>
          <Image
            src="/images/mouse.svg"
            alt="mouse-icon"
            width={50}
            height={50}
          />
        </IconWrapper>
      </SuperWrapper>
    </>
  );
};

export default Hero;
