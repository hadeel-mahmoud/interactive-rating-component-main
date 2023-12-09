import { fireEvent, render, screen } from "@testing-library/react";
import RateUsView from "../components/RatingView/RateUsView/RateUsView";
import RatingView from "../components/RatingView/RatingView";
test("Make sure that the RateUsView is rendered", () => {
  render(<RateUsView />);

  const element = screen.getByTestId("submit-button");
  expect(element).toBeInTheDocument();
});

test("Make sure that the ThankYouView is rendered on Submit ONLY IF a rating is chosen", () => {
  render(<RatingView />);
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  const element = screen.getByTestId("rating-value");
  expect(element).toBeInTheDocument();
});
