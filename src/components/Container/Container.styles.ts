import styled from "styled-components";

import { ContainerProps } from "./Container";

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 20px;
  flex-direction: ${({ choiceAlignment }) =>
    choiceAlignment === "vertical" ? "column" : "row"};
`;
