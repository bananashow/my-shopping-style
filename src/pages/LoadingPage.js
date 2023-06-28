import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoadingPage() {
  const myMbtiArr = [];
  const mbtiList = ["E", "I", "S", "N", "T", "F", "J", "P"];
  const [myMbti, setMyMbti] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const scoreCount = location.state.scoreCount;

  let indices = [];
  for (let i = 0; i < scoreCount.length; i++) {
    indices.push({ value: scoreCount[i], index: i });
  }
  indices.sort((a, b) => b.value - a.value);
  let findLargestIndex = indices.slice(0, 4).map((obj) => obj.index);
  findLargestIndex = findLargestIndex.sort();
  const pushArr = () => {
    for (let i = 0; i < findLargestIndex.length; i++) {
      myMbtiArr.push(mbtiList[findLargestIndex[i]]);
    }
    setMyMbti(myMbtiArr[0] + myMbtiArr[1] + myMbtiArr[2] + myMbtiArr[3]);
  };

  const navigation = () => {
    navigate({
      pathname: `/result/${myMbti}`,
      state: { myMbti },
    });
  };

  useEffect(() => {
    pushArr();
  }, [myMbti]);

  useEffect(() => {
    if (myMbti) {
      navigation();
    }
  }, [myMbti]);

  return <></>;
}

export default LoadingPage;
