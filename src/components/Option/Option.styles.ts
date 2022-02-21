import styled from "styled-components";

export const OptionWrapper = styled.label`
  display: flex;
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  width: fit-content;
  cursor: "pointer";
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #eee;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  p {
    color: #444;
    text-align: left;
    font-size: 16px;
    span {
      color: #ea5280;
    }
  }
`;
