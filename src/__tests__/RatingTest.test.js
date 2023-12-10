import { fireEvent, render, screen } from "@testing-library/react";
import RateUsView from "../components/RatingView/RateUsView/RateUsView";
import RatingView from "../components/RatingView/RatingView";
import RatingNumbers from "../components/RatingNumbers/RatingNumbers";
test("Make sure that the RateUsView is rendered", () => {
  render(<RateUsView />);

  const image = screen.getByTestId("star-image");
  expect(image).toBeInTheDocument();

  const ratingHeader = screen.getByTestId("rating-header");
  expect(ratingHeader).toBeInTheDocument();

  const ratingDescription = screen.getByTestId("rating-description");
  expect(ratingDescription).toBeInTheDocument();

  const button = screen.getByTestId("submit-button");
  expect(button).toBeInTheDocument();
});
test("Make sure that the RateUsView is rendered with given props", () => {
  render(
    <RateUsView
      headerText={"header-text"}
      bodyText={"body-text"}
      submitButtonText={"submit-button-text"}
    />
  );

  const ratingHeader = screen.getByText("header-text");
  expect(ratingHeader).toBeInTheDocument();

  const ratingDescription = screen.getByText("body-text");
  expect(ratingDescription).toBeInTheDocument();

  const button = screen.getByText("submit-button-text");
  expect(button).toBeInTheDocument();
});
test("Make sure that the RatingNumbers is rendered", () => {
  render(<RatingNumbers />);
  const ratingNumbers = screen.getByTestId("rating-numbers-1");
  expect(ratingNumbers).toBeInTheDocument();
});

test("Make sure that the ThankYouView is rendered on submit if no custom submit function is supplied as props", () => {
  render(<RatingView testRating={1} />);
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  const element = screen.getByTestId("rating-value");
  expect(element).toBeInTheDocument();
});
