import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  color: #fff
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, setFilterCoins, coinList) => {
  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  setFilterCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilterCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilterCoins(null);
    return;
  }
  handleFilter(inputValue, setFilterCoins, coinList);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilterCoins, coinList }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilterCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
