import * as BodyContainer from "../components/BodyContainer";

import React, { useEffect, useState } from "react";

import font from "../fonts/font.css";
import main_bg_bottom from "../assets/main_bg_bottom.png";
import main_bg_upper from "../assets/main_bg_upper.png";
import marketImage from "../assets/market.png";
import shareToKatalk from "../share/ShareToKatalk";
import startBtn from "../assets/start_btn.png";
import startBtnHover from "../assets/start_btn_hover.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainImageUpper = styled.img`
  display: flex;
  flex: 1;
  object-fit: contain;
`;
const MainImageBottom = styled.img`
  display: flex;
`;

const StartBtn = styled.img`
  cursor: pointer;
  display: flex;
  width: 200px;
  object-fit: contain;
  margin: auto;
`;
const ShareText = styled.span`
  font-size: 15pt;
  cursor: pointer;
  font-family: GmarketSansMedium;
  text-align: center;

  &:hover {
    color: #eb514b;
  }
`;
function MainPage() {
  const [imageSrc, setImageSrc] = useState(startBtn);
  const navigate = useNavigate();

  const StartBtnClick = () => {
    navigate("/question", {
      state: {},
    });
  };

  const MarketImg = styled.img``;

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
          {/* <BodyContainer.MarketImg></BodyContainer.MarketImg> */}
          <MainImageUpper src={main_bg_upper}></MainImageUpper>
          <StartBtn
            src={imageSrc}
            onMouseEnter={() => setImageSrc(startBtnHover)}
            onMouseLeave={() => setImageSrc(startBtn)}
            onClick={StartBtnClick}
          ></StartBtn>
          <br />
          <ShareText onClick={() => shareToKatalk()}>테스트 공유하기 ＞</ShareText>
          <MainImageBottom src={main_bg_bottom}></MainImageBottom>
          {/* <button onClick={() => shareToKatalk()}>
                        <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                            alt="카카오톡 공유 보내기 버튼" />
                    </button> */}
        </BodyContainer.AppBackground>
      </BodyContainer.BodyBackground>
    </>
  );
}

export default MainPage;
