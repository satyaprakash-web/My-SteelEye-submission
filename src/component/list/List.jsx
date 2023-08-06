import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import timestamps1 from "../../assets/timeStamps.json";

import styles from "./List.module.css";

const List = ({ rows, curr, set1, set2 }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <ListRow key={index} set3={set1} onclickdata1={row} set4 = {set2} onclickdata2 = {row["&id"]}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails?.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.bestExecutionData?.orderVolume?.[curr]}</ListRowCell>
            <ListRowCell>{
              new Set(timestamps1.results.map((timeS) => {
                if (timeS["&id"] === row["&id"]) {
                  return timeS.timestamps.orderSubmitted
                }
              }))
            }</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[`${curr}`]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
