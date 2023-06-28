import React from "react";
import marketImage from "../assets/market.png";
import styled from "styled-components";

export const BodyBackground = styled.div`
  min-height: 100vh;
  max-width: 500px;
  margin: auto;
  `;

export const AppBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MarketImg = styled.img``;

function BodyContainer() {
  return (
    <>
      <BodyBackground>
        <AppBackground>
          <MarketImg src={marketImage}></MarketImg>
        </AppBackground>
      </BodyBackground>
    </>
  );
}

export default BodyContainer;
