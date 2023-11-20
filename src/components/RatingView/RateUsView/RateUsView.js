import star from "../../../assets/icon-star.svg";
import styles from "./RateUsView.module.css";
import RatingNumbers from "./RatingNumbers/RatingNumbers";
export default function RateUsView(props) {
  function handleSubmit() {
    props.setShowThankYouNote(true);
  }
  return (
    <>
      <span className={styles.starContainer}>
        <img src={star} />
      </span>
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingNumbers setRating={props.setRating} rating={props.rating} />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
