import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridStlyed = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList, favorites, topSection) {
  return topSection.topSection
    ? favorites
    : Object.keys(coinList).slice(0, 100);
}

export default function(topSection) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStlyed>
          {getCoinsToDisplay(coinList, favorites, topSection).map(coinKey => (
            <CoinTile topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridStlyed>
      )}
    </AppContext.Consumer>
  );
}
