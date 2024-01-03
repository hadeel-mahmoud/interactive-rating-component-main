import { render, screen } from "@testing-library/react";
import RateUsView from "../components/RateUsView/RateUsView";
import "@testing-library/jest-dom";

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
      ratingViewHeaderText={"header-text"}
      ratingViewBodyText={"body-text"}
      ratingViewSubmitButtonText={"submit-button-text"}
    />
  );

  const ratingHeader = screen.getByText("header-text");
  expect(ratingHeader).toBeInTheDocument();

  const ratingDescription = screen.getByText("body-text");
  expect(ratingDescription).toBeInTheDocument();

  const button = screen.getByText("submit-button-text");
  expect(button).toBeInTheDocument();
});
