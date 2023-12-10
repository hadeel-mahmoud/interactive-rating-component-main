import styles from "./RateUsView.module.css";
import RatingNumbers from "../../RatingNumbers/RatingNumbers";
import star from "../../../assets/icon-star.svg";

export default function RateUsView(props) {
  function handleSubmit() {
    if (props.rating > 0) props.setShowThankYouNote(true);
  }
  return (
    <>
      <div className={styles.starContainer}>
        <img
          src={props.image ? props.image : star}
          className={styles.star}
          alt="star"
        />
      </div>
      <h2 className={styles.header}>
        {props.headerText ? props.headerText : "How did we do?"}
      </h2>
      <p className={styles.bodyText}>
        {props.bodyText
          ? props.bodyText
          : `Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!`}
      </p>
      <RatingNumbers rating={props.rating} setRating={props.setRating} />
      <button
        data-testid="submit-button"
        className={styles.submitButton}
        onClick={props.handleSubmit ? props.handleSubmit : handleSubmit}
      >
        {props.submitButtonText ? props.submitButtonText : "SUBMIT"}
      </button>
    </>
  );
}
