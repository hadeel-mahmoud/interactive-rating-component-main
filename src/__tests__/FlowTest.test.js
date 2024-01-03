import { fireEvent, render, screen } from "@testing-library/react";
import RatingView from "../index.js";
import "@testing-library/jest-dom";

test("Make sure that the ThankYouView is rendered on submit if there is a rating", () => {
  render(<RatingView testRating={1} />);
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  const element = screen.getByTestId("rating-value");
  expect(element).toBeInTheDocument();
});

test("Make sure that the ThankYouView is not rendered on submit if there is no rating", () => {
  render(<RatingView testRating={-1} />);
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});
