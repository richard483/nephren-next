import {
  TextWrapper,
  ContentWrapper,
  IconWrapper,
  Wrapper,
  ImageWrapper,
  TitleWrapper,
  SuperWrapper,
  CreditWrapper,
} from "./style";
import github from "../../constants/images/github.svg";
import instagram from "../../constants/images/instagram.svg";
import linkedin from "../../constants/images/linkedin.svg";
import netlify from "../../constants/images/netlify.svg";
import next from "../../constants/images/next.svg";
import Image from "next/image";

const Footer = () => (
  <>
    <SuperWrapper>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>Richard William</TitleWrapper>
          <TextWrapper>richard.william483@gmail.com</TextWrapper>
          <IconWrapper>
            <a href="https://github.com/richard483">
              <ImageWrapper>
                <Image src={github} alt="github" />
              </ImageWrapper>
            </a>
            <a href="https://www.instagram.com/richard__uwu/">
              <ImageWrapper>
                <Image src={instagram} alt="instagram" />
              </ImageWrapper>
            </a>
            <a href="https://www.linkedin.com/in/richard-william-9590161b7/">
              <ImageWrapper>
                <Image src={linkedin} alt="linkedin" />
              </ImageWrapper>
            </a>
          </IconWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <TextWrapper>This website built using:</TextWrapper>
          <IconWrapper>
            <a href="https://www.netlify.com/">
              <ImageWrapper>
                <Image src={netlify} alt="netlify" />
              </ImageWrapper>
            </a>
            <a href="https://nextjs.org/">
              <ImageWrapper>
                <Image src={next} alt="next" />
              </ImageWrapper>
            </a>
          </IconWrapper>
        </ContentWrapper>
      </Wrapper>
      <CreditWrapper>© nephren 2022</CreditWrapper>
    </SuperWrapper>
  </>
);

export default Footer;
