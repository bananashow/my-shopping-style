import * as BodyContainer from "../components/BodyContainer";

import React, { useState } from "react";

import font from "../fonts/font.css";
import marketImage from "../assets/market.png";
import { qnadata } from "../components/QuestionData";
import question_image_1 from "../assets/questionImage/question_image_01.png";
import question_image_10 from "../assets/questionImage/question_image_10.png";
import question_image_11 from "../assets/questionImage/question_image_11.png";
import question_image_12 from "../assets/questionImage/question_image_12.png";
import question_image_2 from "../assets/questionImage/question_image_02.png";
import question_image_3 from "../assets/questionImage/question_image_03.png";
import question_image_4 from "../assets/questionImage/question_image_04.png";
import question_image_5 from "../assets/questionImage/question_image_05.png";
import question_image_6 from "../assets/questionImage/question_image_06.png";
import question_image_7 from "../assets/questionImage/question_image_07.png";
import question_image_8 from "../assets/questionImage/question_image_08.png";
import question_image_9 from "../assets/questionImage/question_image_09.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const images = {
  1: question_image_1,
  2: question_image_2,
  3: question_image_3,
  4: question_image_4,
  5: question_image_5,
  6: question_image_6,
  7: question_image_7,
  8: question_image_8,
  9: question_image_9,
  10: question_image_10,
  11: question_image_11,
  12: question_image_12,
};
const QuestionNum = styled.div`
  text-align: center;
  font-size: 30pt;
  font-family: "GangwonEduPowerExtraBoldA";
`;
const QuestionText = styled.div`
  font-size: 18pt;
  font-family: "ONE-Mobile-POP";
  text-align: center;
`;
const AnswerBox = styled.div`
  background-color: #f3f3f3;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 13px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  font-size: 13pt;

  &:hover {
    background-color: #e5e5e5;
    transition: 0.4s;
  }
`;
const AnswerContainer = styled.div`
  margin-bottom: 35px;
  font-size: 14pt;
  text-align: center;
`;
const QuestionImage = styled.img`
  display: flex;
  flex: 0.8;
  object-fit: contain;
`;
const MarketImg = styled.img``;
const TotalNum = styled.span`
  font-size: 25pt;
`;
const Wrapper = styled.div`
  padding: 10px;
`;

function Question() {
  const [questionNum, setQuestionNum] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scoreCount, setScoreCount] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const navigation = useNavigate();

  const answerClick = (props) => {
    setQuestionNum(questionNum + 1);
    setQuestionIndex(questionIndex + 1);

    const newScoreArr = [...scoreCount];
    switch (props) {
      case "E": {
        newScoreArr[0] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "I": {
        newScoreArr[1] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "S": {
        newScoreArr[2] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "N": {
        newScoreArr[3] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "T": {
        newScoreArr[4] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "F": {
        newScoreArr[5] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "J": {
        newScoreArr[6] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      case "P": {
        newScoreArr[7] += 1;
        setScoreCount(newScoreArr);
        break;
      }
      default:
        break;
    }
  };

  if (questionNum > 12) {
    navigation("/loading", {
      state: {
        scoreCount,
      },
    });
  }

  return (
    <>
      <BodyContainer.BodyBackground>
        <BodyContainer.AppBackground>
          <MarketImg src={marketImage}></MarketImg>
          <QuestionImage src={images[questionNum]}></QuestionImage>
          <Wrapper>
            <QuestionNum>
              {questionNum}
              <TotalNum> / 12</TotalNum>
            </QuestionNum>
            <QuestionText>
              {qnadata[questionIndex]?.question_1} <br />
              {qnadata[questionIndex]?.question_2}
            </QuestionText>
          </Wrapper>

          <AnswerContainer>
            <AnswerBox
              onClick={() => answerClick(qnadata[questionIndex].answer[0].type)}
            >
              {qnadata[questionIndex]?.answer[0].content_1} <br />
              {qnadata[questionIndex]?.answer[0].content_2}
            </AnswerBox>

            <AnswerBox
              onClick={() => answerClick(qnadata[questionIndex].answer[1].type)}
            >
              {qnadata[questionIndex]?.answer[1].content_1} <br />
              {qnadata[questionIndex]?.answer[1].content_2}
            </AnswerBox>
          </AnswerContainer>
        </BodyContainer.AppBackground>
      </BodyContainer.BodyBackground>
    </>
  );
}

export default Question;
