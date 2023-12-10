import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import RateUsView from "./RateUsView/RateUsView";
import ThankYouView from "./ThankYouView/ThankYouView";
import thankYouImage from "../../assets/illustration-thank-you.svg";
import star from "../../assets/icon-star.svg";

export default function RatingView() {
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  const [rating, setRating] = useState(-1);

  return (
    <Wrapper>
      {showThankYouNote ? (
        <ThankYouView
          image={thankYouImage}
          rating={rating}
          ratingText={"You selected {value} out of 5"}
          thankYouDescriptionText={null}
        />
      ) : (
        <RateUsView
          image={star}
          // handleSubmit={() => {
          //   setShowThankYouNote(true);
          // }}
          setShowThankYouNote={setShowThankYouNote}
          setRating={setRating}
          // headerText={"How would you rate us?"}
          // bodyText={"Let us know how we did. "}
          // submitButtonText={"Lets go"}
          rating={rating}
        />
      )}
    </Wrapper>
  );
}
