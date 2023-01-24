import LotteryItem from "./Item.component";
import { lotteryStyles, lotteryItemWrapperStyles } from "./lottery.styles";

const Lottery = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div style={lotteryStyles}>
      <h3>lottery</h3>
      <div style={lotteryItemWrapperStyles}>
        {numbers.map((number) => (
          <LotteryItem key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

export default Lottery;
