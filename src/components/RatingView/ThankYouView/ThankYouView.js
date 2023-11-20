import thankYouImage from "../../../assets/illustration-thank-you.svg";
export default function ThankYouView(props) {
  return (
    <>
      <img src={thankYouImage} />
      <p>You selected {props.rating} out of 5</p>
      <h2>Thank You</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch
      </p>
    </>
  );
}
