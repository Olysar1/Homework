import LotteryItem from "./Item.component";
import { StyledLottery, StyledLotteryItemWrapper } from "./lottery.styles";

const Lottery = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <StyledLottery>
      <h3>lottery</h3>
      <StyledLotteryItemWrapper>
        {numbers.map((number, index) => (
          <LotteryItem
            number={number}
            isLast={index === numbers.length - 1}
            key={number}
          />
        ))}
      </StyledLotteryItemWrapper>
    </StyledLottery>
  );
};

export default Lottery;
