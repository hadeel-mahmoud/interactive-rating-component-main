import styles from "./RatingNumbers.module.css";

export default function RatingNumbers(props) {
  const values = [1, 2, 3, 4, 5];
  const handleValueClick = (value) => {
    props.setRating(value);
  };
  return (
    <div className={styles.container}>
      {values.map((value, index) => (
        <p
          data-testid={`rating-numbers-${index}`}
          key={index}
          style={
            props.rating === value
              ? { background: "grey", color: "white" }
              : null
          }
          onClick={() => handleValueClick(value)}
          className={styles.numberContainer}
        >
          {value}
        </p>
      ))}
    </div>
  );
}
