import { lotteryItemStyles } from "./lottery.styles";

const LotteryItem = ({ number }) => {
  return <div style={lotteryItemStyles}>{number}</div>;
};

export default LotteryItem;
