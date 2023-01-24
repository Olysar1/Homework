import { StyledLotteryItem } from "./lottery.styles";

const LotteryItem = ({ number, isLast }) => {
  return <StyledLotteryItem isLast={isLast}>{number}</StyledLotteryItem>;
};

export default LotteryItem;
