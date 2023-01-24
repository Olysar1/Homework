import LotteryItem from "./Item.component";
import styles from "./lottery.styles.module.css";

const Lottery = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.lottery}>
      <h3>lottery</h3>
      <div className={styles.lotteryItemWrapper}>
        {numbers.map((number) => (
          <LotteryItem key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

export default Lottery;
