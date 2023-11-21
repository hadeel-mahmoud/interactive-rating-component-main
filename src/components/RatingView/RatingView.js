import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import RateUsView from "./RateUsView/RateUsView";
import ThankYouView from "./ThankYouView/ThankYouView";

export default function RatingView() {
  const [showThankYouNote, setShowThankYouNote] = useState(false);
  return (
    <Wrapper>
      {showThankYouNote ? (
        <ThankYouView />
      ) : (
        <RateUsView setShowThankYouNote={setShowThankYouNote} />
      )}
    </Wrapper>
  );
}
