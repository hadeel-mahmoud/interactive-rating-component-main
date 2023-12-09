import styles from "./RateUsView.module.css";
import RatingNumbers from "../../RatingNumbers/RatingNumbers";
import star from "../../../assets/icon-star.svg";

export default function RateUsView(props) {
  function handleSubmit() {
    props.setShowThankYouNote(true);
  }
  return (
    <>
      <span className={styles.starContainer}>
        <img src={props.image ? props.image : star} alt="star" />
      </span>
      <h3>{props.headerText ? props.headerText : "How did we do?"}</h3>
      <p>
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
        {props.submitButtonText ? props.submitButtonText : "Submit"}
      </button>
    </>
  );
}
