import styled from "styled-components";
import { fontSize2, textColor } from "../Shared/Styles";

export default styled.select`
  background: none
  ${fontSize2}
  color: #fff;
  border: none
  margin: 5px;
  height: 25px;
  float: right;
  &:hover {
    cursor: pointer;
    color: ${textColor};
    transition: 1s;
  }
`;
