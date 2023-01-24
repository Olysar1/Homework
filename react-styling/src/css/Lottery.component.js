import LotteryItem from "./Item.component";
import "./lottery.css";

const Lottery = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div className="lottery">
      <h3>lottery</h3>
      <div className="lottery-item-wrapper">
        {numbers.map((number) => (
          <LotteryItem key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

export default Lottery;
