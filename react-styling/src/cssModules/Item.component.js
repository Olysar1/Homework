import styles from "./lottery.styles.module.css";

const LotteryItem = ({ number }) => {
  // console.log(styles);
  return <div className={styles.lotteryItem}>{number}</div>;
};

export default LotteryItem;
