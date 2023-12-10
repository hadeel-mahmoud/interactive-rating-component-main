import thankYouImage from "../../../assets/illustration-thank-you.svg";
import styles from "./ThankYouView.module.css";
export default function ThankYouView(props) {
  return (
    <div className={styles.body}>
      <img
        data-testid="thank-you-image"
        className={styles.image}
        src={props.image ? props.image : thankYouImage}
        alt={"Thank You"}
      />
      <p className={styles.score} data-testid="rating-value">
        {props.ratingText
          ? props.ratingText.replace("{value}", props.rating)
          : `You selected ${props.rating} out of 5`}
      </p>
      <h2 data-testid="thank-you-header" className={styles.headerText}>
        {props.thankYouText ? props.thankYouText : "Thank You!"}
      </h2>
      <p data-testid="thank-you-description" className={styles.bodyText}>
        {props.thankYouDescriptionText
          ? props.thankYouDescriptionText
          : `We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch`}
      </p>
    </div>
  );
}
