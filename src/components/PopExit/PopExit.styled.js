import { Link } from "react-router-dom";
import styled from "styled-components";
import { hover03 } from "../shared.styled";

export const LinkYes = styled(Link)`
  color: white;
`;

export const LinkNo = styled(LinkYes)`
  color: #565eef;
  font-weight: 500;

  &:hover {
    color: white;
  }
`;

export const ButtonNo = styled(Link)`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  color: #565eef;
  text-decoration: none;

  ${hover03}
`;
