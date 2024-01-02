import styles from "./RateUsView.module.css";
import RatingNumbers from "../RatingNumbers/RatingNumbers";
import star from "../../assets/icon-star.svg";

export default function RateUsView(props) {
  function handleSubmit() {
    if (props.rating > 0) props.setShowThankYouNote(true);
  }
  return (
    <>
      <div className={styles.starContainer} style={props.imageContainerStyle}>
        <img
          data-testid="star-image"
          src={props.image ? props.image : star}
          className={styles.star}
          alt="star"
          style={props.imageStyle}
        />
      </div>
      <h2
        style={props.ratingHeaderStyle}
        data-testid="rating-header"
        className={styles.header}
      >
        {props.headerText ? props.headerText : "How did we do?"}
      </h2>
      <p
        style={props.ratingDescriptionStyle}
        data-testid="rating-description"
        className={styles.bodyText}
      >
        {props.bodyText
          ? props.bodyText
          : `Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!`}
      </p>
      <RatingNumbers
        rating={props.rating}
        setRating={props.setRating}
        ratingNumberContainerStyle={props.ratingNumberContainerStyle}
        ratingNumberStyle={props.ratingNumberStyle}
      />
      <button
        data-testid="submit-button"
        className={styles.submitButton}
        onClick={props.handleSubmit ? props.handleSubmit : handleSubmit}
        style={props.submitButtonStyle}
      >
        {props.submitButtonText ? props.submitButtonText : "SUBMIT"}
      </button>
    </>
  );
}
