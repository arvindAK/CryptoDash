import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStlyed = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList, topSection) {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function(topSection) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStlyed>
          {getCoinsToDisplay(coinList, topSection).map((coinKey, index) => (
            <CoinTile topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridStlyed>
      )}
    </AppContext.Consumer>
  );
}
