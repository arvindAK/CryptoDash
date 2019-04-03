import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";

export const CoinGridStlyed = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStlyed>
          {Object.keys(coinList).map((coinKey, index) => (
            <SelectableTile key={index}>{coinKey}</SelectableTile>
          ))}
        </CoinGridStlyed>
      )}
    </AppContext.Consumer>
  );
}
