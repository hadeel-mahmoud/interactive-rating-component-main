import styles from "./RateUsView.module.css";
import RatingNumbers from "../RatingNumbers/RatingNumbers";
import star from "../../assets/icon-star.svg";

export default function RateUsView(props) {
  function handleSubmit() {
    if (props.rating > 0) props.setShowThankYouNote(true);
  }
  return (
    <>
      <div
        className={styles.starContainer}
        style={props.ratingViewImageContainerStyle}
      >
        <img
          data-testid="star-image"
          src={props.ratingViewImage ? props.ratingViewImage : star}
          className={styles.star}
          alt="star"
          style={props.ratingViewImageStyle}
        />
      </div>
      <h2
        style={props.ratingViewHeaderStyle}
        data-testid="rating-header"
        className={styles.header}
      >
        {props.ratingViewHeaderText
          ? props.ratingViewHeaderText
          : "How did we do?"}
      </h2>
      <p
        style={props.ratingViewDescriptionStyle}
        data-testid="rating-description"
        className={styles.bodyText}
      >
        {props.ratingViewBodyText
          ? props.ratingViewBodyText
          : `Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!`}
      </p>
      <RatingNumbers
        rating={props.rating}
        setRating={props.setRating}
        ratingNumberContainerStyle={props.ratingViewNumberContainerStyle}
        ratingViewSelectedNumberStyle={props.ratingViewSelectedNumberStyle}
        ratingViewNumberStyle={props.ratingViewNumberStyle}
      />
      <button
        data-testid="submit-button"
        className={styles.submitButton}
        onClick={props.handleSubmit ? props.handleSubmit : handleSubmit}
        style={props.ratingViewSubmitButtonStyle}
      >
        {props.ratingViewSubmitButtonText
          ? props.ratingViewSubmitButtonText
          : "SUBMIT"}
      </button>
    </>
  );
}
