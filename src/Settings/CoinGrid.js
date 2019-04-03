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

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStlyed>
          {getCoinsToDisplay(coinList).map((coinKey, index) => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStlyed>
      )}
    </AppContext.Consumer>
  );
}
