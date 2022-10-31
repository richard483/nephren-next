import axios from "axios";
import { useEffect, useState } from "react";
import {
  AesBox,
  ContentWrapper,
  SuperWrapper,
  TitleWrapper,
  Wrapper,
} from "./style";

var data = JSON.stringify({
  collection: "AboutMe",
  database: "ContentData",
  dataSource: "Cluster0",
  projection: {
    _id: 1,
    string: 1,
  },
});

const AboutMe = () => {
  // const [aboutMeData, setAboutMeData] = useState("");

  // useEffect(() => {
  //   requestAboutMe();
  // }, []);

  // async function requestAboutMe() {
  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: "https://data.mongodb-api.com/app/data-ussam/endpoint/data/v1/action/findOne",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Request-Headers": "*",
  //         "api-key":
  //           "IUWcXY39wd5xIhPcmKnWclq3IyyfOHNX4g9JIwB2iUt8nuFXTpMD67v3Xfff5LzX",
  //       },
  //       data: data,
  //     });
  //     // let json = JSON.stringify(response.data.document.string.Code);
  //     setAboutMeData(response.data.document.string.Code);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div id="aboutMe">
      <SuperWrapper>
        <AesBox />
        <Wrapper>
          <TitleWrapper>About Me</TitleWrapper>
          <ContentWrapper>
            I am a 5th semester IT student at Bina Nusantara University who
            likes to explore the field of Software Engineering, from Back End,
            Front End, Mobile Apps, until DevOps. I am currently joining the
            internship program at PT. Infra Solusi Indonesia as a Back End
            developer. I currently interested in learning about React JS and
            Node JS. I have experience in developing web applications using
            Laravel and Fastify. Also, I used to teaching Mobile Apps
            Development using Java and Android Studio. <br /> <br /> In my free
            time, I like to watching animes, play games, and looking for new
            things to learn such as programming things and Linux. Currently I
            using Windows as my main OS, and I used Ubuntu as my secondary OS on
            the same device. I like to exlporing the Linux world, and I slowly
            moving my workflow to Linux. I am looking forward for my next intern
            as a Back End Developer or Full Stack Developer on my dream company
            :D
          </ContentWrapper>
        </Wrapper>
      </SuperWrapper>
    </div>
  );
};

export default AboutMe;
