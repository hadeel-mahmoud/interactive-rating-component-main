import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import RateUsView from "./RateUsView/RateUsView";
import ThankYouView from "./ThankYouView/ThankYouView";

export default function RatingView() {
  const [rating, setRating] = useState(null);
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  return (
    <Wrapper>
      {showThankYouNote ? (
        <ThankYouView rating={rating} />
      ) : (
        <RateUsView
          setRating={setRating}
          rating={rating}
          setShowThankYouNote={setShowThankYouNote}
        />
      )}
    </Wrapper>
  );
}
