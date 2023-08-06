import styles from "./ListRow.module.css";
import timeStamps from '../../assets/timeStamps.json'

const ListCell = ({ children, set3, onclickdata1, set4, onclickdata2 }) => {
  const handleClick = () => {
    set3(onclickdata1);
    timeStamps.results.map((time1) => {
      return (
        time1["&id"] === onclickdata2 ? set4(time1.timestamps) : set4({})
      )
    })
    set4(onclickdata2);
  };
  return <tr className={styles.cell} onClick={handleClick}>{children}</tr>;
};

export default ListCell;
