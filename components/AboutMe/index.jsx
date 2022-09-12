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
  const [aboutMeData, setAboutMeData] = useState("");

  useEffect(() => {
    console.log("useEffect");
    requestAboutMe();
  }, []);

  async function requestAboutMe() {
    try {
      const response = await axios({
        method: "post",
        url: "https://data.mongodb-api.com/app/data-ussam/endpoint/data/v1/action/findOne",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "IUWcXY39wd5xIhPcmKnWclq3IyyfOHNX4g9JIwB2iUt8nuFXTpMD67v3Xfff5LzX",
        },
        data: data,
      });
      // let json = JSON.stringify(response.data.document.string.Code);
      setAboutMeData(response.data.document.string.Code);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SuperWrapper>
        <AesBox />
        <Wrapper>
          <TitleWrapper>About Me</TitleWrapper>
          <ContentWrapper>{aboutMeData}</ContentWrapper>
        </Wrapper>
      </SuperWrapper>
    </>
  );
};

export default AboutMe;
