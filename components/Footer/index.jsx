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
import Image from "next/image";

const Footer = () => (
  <div id="footer">
    <SuperWrapper>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>Richard William</TitleWrapper>
          <TextWrapper>richard.william483@gmail.com</TextWrapper>
          <IconWrapper>
            <a href="https://github.com/richard483">
              <ImageWrapper>
                <Image
                  src="/images/github.svg"
                  alt="github"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </a>
            <a href="https://www.instagram.com/richard__uwu/">
              <ImageWrapper>
                <Image
                  src="/images/instagram.svg"
                  alt="instagram"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </a>
            <a href="https://www.linkedin.com/in/richard-william-9590161b7/">
              <ImageWrapper>
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </a>
          </IconWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <TextWrapper>This website built using:</TextWrapper>
          <IconWrapper>
            <a href="https://vercel.com/">
              <ImageWrapper>
                <Image
                  src="/images/vercel-icon-light.svg"
                  alt="netlify"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </a>
            <a href="https://nextjs.org/">
              <ImageWrapper>
                <Image
                  src="/images/next.svg"
                  alt="next"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </a>
          </IconWrapper>
        </ContentWrapper>
      </Wrapper>
      <CreditWrapper>© nephren 2022</CreditWrapper>
    </SuperWrapper>
  </div>
);

export default Footer;
