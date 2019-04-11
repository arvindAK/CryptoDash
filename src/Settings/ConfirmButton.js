import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import {
  fontSize1,
  greenBoxShadow,
  color3,
  lightBlueBackground
} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: #fff;
  ${lightBlueBackground}
  ${fontSize1}
  padding: 10px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
    color: ${color3}
    transition: 1s;
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
  cursor: pointer;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
