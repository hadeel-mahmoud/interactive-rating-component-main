import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import RateUsView from "./RateUsView/RateUsView";
import ThankYouView from "./ThankYouView/ThankYouView";
import thankYouImage from "../../assets/illustration-thank-you.svg";
import star from "../../assets/icon-star.svg";

export default function RatingView(props) {
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  const [rating, setRating] = useState(-1);

  return (
    <Wrapper style={props.style}>
      {!showThankYouNote ? (
        <RateUsView
          handleSubmit={() => {
            setShowThankYouNote(true);
          }}
          image={star}
          setShowThankYouNote={setShowThankYouNote}
          setRating={setRating}
          headerText={"How would you rate us?"}
          bodyText={"Let us know how we did. "}
          submitButtonText={"Lets go"}
          rating={props.testRating ? props.testRating : rating}
          imageContainerStyle={props.imageContainer}
          imageStyle={props.imageStyle}
          ratingHeaderStyle={props.ratingHeaderStyle}
          ratingDescriptionStyle={props.ratingDescriptionStyle}
          submitButtonStyle={props.submitButtonStyle}
          ratingNumberContainerStyle={props.ratingNumberContainerStyle}
          ratingNumberStyle={props.ratingNumberStyle}
        />
      ) : (
        <ThankYouView
          image={props.image ? props.image : thankYouImage}
          rating={rating}
          ratingText={
            props.ratingText
              ? props.ratingText
              : "You selected {value} out of 5"
          }
          thankYouDescriptionText={
            props.thankYouDescriptionText ? props.thankYouDescriptionText : null
          }
          thankYouBodyStyle={props.thankYouBodyStyle}
          thankYouImageStyle={props.thankYouImageStyle}
          ratingResultTextStyle={props.ratingResultTextStyle}
          thankYouHeaderStyle={props.thankYouHeaderStyle}
          thankYouDescriptionTextStyle={props.thankYouDescriptionTextStyle}
        />
      )}
    </Wrapper>
  );
}
