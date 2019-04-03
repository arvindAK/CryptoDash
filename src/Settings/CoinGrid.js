import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

export const CoinGridStlyed = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStlyed>
          {Object.keys(coinList).map((coinKey, index) => (
            <div key={index}>{coinKey}</div>
          ))}
        </CoinGridStlyed>
      )}
    </AppContext.Consumer>
  );
}
