import styled, { css, keyframes } from "styled-components";
import { breakpoints } from "../lib/breakpoints";

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${(props) => (props.$primary ? "#565EEF" : "transparent")};
  border-radius: 4px;
  border: ${(props) =>
    props.$primary ? "none" : "0.7px solid var(--palette-navy-60, #565EEF)"};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#565EEF")};
  margin-right: 10px;

  ${hover03}
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`;

export const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
  }

  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
  }

  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
  }

  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
  }

  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${prixClipFix} 2s linear infinite;
  }

  &::after {
    border-color: #ff3d00;
    animation: ${prixClipFix} 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }
`;
