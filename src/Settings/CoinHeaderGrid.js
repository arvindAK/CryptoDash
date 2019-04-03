import React from "react";
import styled from "styled-components";

export const CoinHeaderGridSystem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export default function({ name, symbol }) {
  return (
    <CoinHeaderGridSystem>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGridSystem>
  );
}
