import * as BodyContainer from "../components/BodyContainer";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { answerData, mbti } from "../components/AnswerData";
import font from "../fonts/font.css";
import kakaoBtn from "../assets/kakaoBtn.png";
import marketImage from "../assets/market.png";
import restartBtn from "../assets/restart_btn.png";
import restartBtnHover from "../assets/restart_btn_hover.png";
import result_image_1 from "../assets/resultImage/result_image_01.png";
import result_image_10 from "../assets/resultImage/result_image_10.png";
import result_image_11 from "../assets/resultImage/result_image_11.png";
import result_image_12 from "../assets/resultImage/result_image_12.png";
import result_image_13 from "../assets/resultImage/result_image_13.png";
import result_image_14 from "../assets/resultImage/result_image_14.png";
import result_image_15 from "../assets/resultImage/result_image_15.png";
import result_image_16 from "../assets/resultImage/result_image_16.png";
import result_image_2 from "../assets/resultImage/result_image_02.png";
import result_image_3 from "../assets/resultImage/result_image_03.png";
import result_image_4 from "../assets/resultImage/result_image_04.png";
import result_image_5 from "../assets/resultImage/result_image_05.png";
import result_image_6 from "../assets/resultImage/result_image_06.png";
import result_image_7 from "../assets/resultImage/result_image_07.png";
import result_image_8 from "../assets/resultImage/result_image_08.png";
import result_image_9 from "../assets/resultImage/result_image_09.png";
import shareBtn from "../assets/shareBtn.png";
import shareMyResult from "../share/ShareMyResult";
import styled from "styled-components";

const images = {
  1: result_image_1,
  2: result_image_2,
  3: result_image_3,
  4: result_image_4,
  5: result_image_5,
  6: result_image_6,
  7: result_image_7,
  8: result_image_8,
  9: result_image_9,
  10: result_image_10,
  11: result_image_11,
  12: result_image_12,
  13: result_image_13,
  14: result_image_14,
  15: result_image_15,
  16: result_image_16,
};

const ResultSubTitle = styled.div`
  font-size: 18pt;
  margin-top: 30px;
  font-family: "ONE-Mobile-POP";
  text-align: center;
`;
const ResultTitle = styled.div`
  background: #007cb4;
  width: 90%;
  height: 70px;
  color: white;
  margin-top: 10px;
  font-size: 25pt;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SuseongDotum;
`;

const ResultImage = styled.img`
  width: 90%;
  margin: auto;
`;
const MarketImg = styled.img``;
const ResultStyleContainer = styled.div`
  display: inline-block;
  border: 2px solid #e3e3e3;
  width: 90%;
  height: auto;
  border-radius: 20px;
  margin: auto;
`;
const KakaoShare = styled.div`
  display: inline-block;
  border: 2px solid #e3e3e3;
  width: 90%;
  height: auto;
  border-radius: 20px;
  margin: auto;
  margin-top: 40px;
`;
const ResultStyleTitle = styled.div`
  text-align: center;
  margin: 30px;
  font-size: 16pt;
  font-family: Cafe24Ssurround;
`;
const ResultStyleContent = styled.div`
  margin: 8px;
  text-align: left;
  font-family: GmarketSansMedium;
  font-size: 12pt;
`;
const MbtiText = styled.span`
  font-weight: bold;
  color: #eb514b;
`;
const KakaoBtn = styled.img`
  cursor: pointer;
`;
const ShareBtn = styled.img`
  cursor: pointer;
`;
const RestartBtn = styled.img`
  margin-top: 40px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 90%;
`;
const MbtiNotice = styled.span`
  font-size: 10pt;
  margin-left: 12px;
  margin-bottom: 10px;
  font-family: Pretendard-Regular;
`;
const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ShareBtns = styled.div`
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  display: flex;
`;

function Result() {
  const [imageSrc, setImageSrc] = useState(restartBtn);

  const navigate = useNavigate();

  const { myMbti } = useParams();

  const findMatchingAnswerData = () => {
    const result = answerData.find((data) => data.type === myMbti);
    return result;
  };
  const matchingAnswerData = findMatchingAnswerData();

  const findMatchingMbtiData = () => {
    const result = mbti.find((data) => data.type === myMbti);
    return result;
  };
  const matchingMbtiData = findMatchingMbtiData();

  const shareBtnClick = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("URL이 복사되었습니다");
  };

  useEffect(() => {
    //카카오톡 sdk 추가
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  });

  return (
    <>
      <BodyContainer.BodyBackground>
        <BodyContainer.AppBackground>
          <MarketImg src={marketImage}></MarketImg>
          <Wrapper>
            <ResultSubTitle>{matchingAnswerData.answer_1}</ResultSubTitle>
            <ResultTitle>{matchingAnswerData.answer_2}</ResultTitle>
            <ResultImage src={images[matchingAnswerData.id]}></ResultImage>
            <ResultStyleContainer>
              <ResultStyleTitle>
                "{matchingAnswerData.contentTitle}"
              </ResultStyleTitle>
              <ResultStyleContent>
                ＞ 나의 장BTI는? <MbtiText>[ {myMbti} ]</MbtiText>
                <br />
                <MbtiNotice>
                  ※ 성격 유형 테스트(MBTI)와는 다름을 알려드립니다.
                </MbtiNotice>
              </ResultStyleContent>
              {matchingMbtiData.contents.map((content, idx) => {
                return (
                  <ResultStyleContent key={idx}>
                    ＞ {content}
                  </ResultStyleContent>
                );
              })}
              <br />
            </ResultStyleContainer>

            <KakaoShare>
              <ResultStyleTitle>"내 결과 공유하기"</ResultStyleTitle>
              <ShareBtns>
                <KakaoBtn
                  src={kakaoBtn}
                  onClick={() => shareMyResult()}
                ></KakaoBtn>
                <ShareBtn src={shareBtn} onClick={shareBtnClick}></ShareBtn>
              </ShareBtns>
            </KakaoShare>

            <RestartBtn
              src={imageSrc}
              onMouseEnter={() => setImageSrc(restartBtnHover)}
              onMouseLeave={() => setImageSrc(restartBtn)}
              onClick={() => navigate("/")}
            ></RestartBtn>
          </Wrapper>
        </BodyContainer.AppBackground>
      </BodyContainer.BodyBackground>
    </>
  );
}

export default Result;
