import styled from "styled-components";

import { CheckAnswerProps } from "./CheckAnswer";

export const RoundContainer = styled.button<CheckAnswerProps>`
  position: fixed;
  border: 0;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  padding: 10px;
  height: 50px;
  font-size: 12px;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "#ea5280")};
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
  color: ${({ disabled }) => (!disabled ? "#fff" : "#ccc")};
  transition: background-color 0.3s linear;
  box-shadow: 5px 5px 10px -1px #a3a3a3;
`;
