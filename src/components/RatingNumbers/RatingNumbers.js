import styles from "./RatingNumbers.module.css";

export default function RatingNumbers(props) {
  const values = [1, 2, 3, 4, 5];
  const handleValueClick = (value) => {
    props.setRating(value);
  };
  return (
    <div className={styles.container} style={props.ratingNumberContainerStyle}>
      {values.map((value, index) => (
        <p
          data-testid={`rating-numbers-${index}`}
          key={index}
          style={
            props.rating === value
              ? {
                  background: "grey",
                  color: "white",
                  ...props.ratingNumberStyle,
                }
              : props.ratingNumberStyle
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
