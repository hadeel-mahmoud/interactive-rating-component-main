import { useState } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import RateUsView from "./components/RateUsView/RateUsView";
import ThankYouView from "./components/ThankYouView/ThankYouView";

export default function RatingView(props) {
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  const [rating, setRating] = useState(-1);

  return (
    <Wrapper style={props.containerStyle}>
      {!showThankYouNote ? (
        <RateUsView
          ratingViewImage={props.ratingViewImage}
          setShowThankYouNote={setShowThankYouNote}
          setRating={setRating}
          ratingViewHeaderText={props.ratingViewHeaderText}
          ratingViewBodyText={props.ratingViewBodyText}
          ratingViewSubmitButtonText={props.ratingViewSubmitButtonText}
          rating={props.testRating ? props.testRating : rating}
          ratingViewImageContainerStyle={props.ratingViewImageContainerStyle}
          ratingViewImageStyle={props.ratingViewImageStyle}
          ratingViewHeaderStyle={props.ratingViewHeaderStyle}
          ratingViewDescriptionStyle={props.ratingViewDescriptionStyle}
          ratingViewSubmitButtonStyle={props.ratingViewSubmitButtonStyle}
          ratingViewNumberContainerStyle={props.ratingViewNumberContainerStyle}
          ratingViewNumberStyle={props.ratingViewNumberStyle}
        />
      ) : (
        <ThankYouView
          thankYouViewImage={props.thankYouViewImage}
          rating={rating}
          thankYouText={props.thankYouText}
          thankYouViewRatingResultText={props.thankYouViewRatingResultText}
          thankYouViewDescriptionText={props.thankYouViewDescriptionText}
          thankYouViewBodyStyle={props.thankYouViewBodyStyle}
          thankYouViewImageStyle={props.thankYouViewImageStyle}
          thankYouViewRatingResultTextStyle={
            props.thankYouViewRatingResultTextStyle
          }
          thankYouViewHeaderStyle={props.thankYouViewHeaderStyle}
          thankYouViewDescriptionTextStyle={
            props.thankYouViewDescriptionTextStyle
          }
        />
      )}
    </Wrapper>
  );
}
