import thankYouImage from "../../../assets/illustration-thank-you.svg";
export default function ThankYouView(props) {
  return (
    <>
      <img src={props.image ? props.image : thankYouImage} alt={"Thank You"} />
      <p data-testid="rating-value">
        {props.ratingText
          ? props.ratingText.replace("{value}", props.rating)
          : `You selected ${props.rating} out of 5`}
      </p>
      <h2>{props.thankYouText ? props.thankYouText : "Thank You"}</h2>
      <p>
        {props.thankYouDescriptionText
          ? props.thankYouDescriptionText
          : `We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch`}
      </p>
    </>
  );
}
