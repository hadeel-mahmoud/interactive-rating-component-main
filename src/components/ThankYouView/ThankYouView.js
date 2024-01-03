import thankYouImage from "../../assets/illustration-thank-you.svg";
import styles from "./ThankYouView.module.css";

export default function ThankYouView(props) {
  return (
    <div className={styles.body} style={props.thankYouViewBodyStyle}>
      <img
        data-testid="thank-you-image"
        className={styles.image}
        src={props.thankYouViewImage ? props.thankYouViewImage : thankYouImage}
        alt={"Thank You"}
        style={props.thankYouViewImageStyle}
      />
      <p
        className={styles.score}
        data-testid="rating-value"
        style={props.thankYouViewRatingResultTextStyle}
      >
        {props.thankYouViewRatingResultText
          ? props.thankYouViewRatingResultText.replace("{value}", props.rating)
          : `You selected ${props.rating} out of 5`}
      </p>
      <h2
        data-testid="thank-you-header"
        className={styles.headerText}
        style={props.thankYouViewHeaderStyle}
      >
        {props.thankYouText ? props.thankYouText : "Thank You!"}
      </h2>
      <p
        data-testid="thank-you-description"
        className={styles.bodyText}
        style={props.thankYouViewDescriptionTextStyle}
      >
        {props.thankYouViewDescriptionText
          ? props.thankYouViewDescriptionText
          : `We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch`}
      </p>
    </div>
  );
}
