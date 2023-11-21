import { useDispatch, useSelector } from "react-redux";
import styles from "./RatingNumbers.module.css";
import { rate } from "../../store/ratingSlice";

export default function RatingNumbers(props) {
  const values = [1, 2, 3, 4, 5];
  const rating = useSelector((state) => state.rating.value.payload);
  const dispatch = useDispatch();
  const handleValueClick = (value) => {
    dispatch(rate(value));
  };
  return (
    <div className={styles.container}>
      {values.map((value, index) => (
        <p
          key={index}
          style={rating == value ? { background: "grey" } : null}
          onClick={() => handleValueClick(value)}
          className={styles.numberContainer}
        >
          {value}
        </p>
      ))}
    </div>
  );
}
