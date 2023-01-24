import styled, { css } from "styled-components";

export const StyledLottery = styled.div`
  border: 2px dashed grey;
  width: 600px;
  margin: 100px auto;
  padding: 40px 0 20px 0;
  border-radius: 10px;
  text-align: center;
`;

export const StyledLotteryItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLotteryItem = styled.div`
  width: 80px;
  height: 80px;
  background-color: lime;
  border-radius: 50%;
  text-align: center;
  margin: 0 10px;
  color: white;
  font-weight: bold;
  font-size: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isLast &&
    css`
      background-color: yellow;
    `}
`;
