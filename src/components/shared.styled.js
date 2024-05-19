import styled, { css } from "styled-components";

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
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
