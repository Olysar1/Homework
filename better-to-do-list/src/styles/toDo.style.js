import styled, { css } from "styled-components";

export const StyledToDoLi = styled.li`
  border: solid;
  border-radius: 6px;
  border-width: 1.5px;
  border-left-width: 6px;
  margin: 20px;

  ${(props) =>
    css`
      border-color: ${props.color()};
    `}
`;
