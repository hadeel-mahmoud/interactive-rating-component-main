import { render, screen } from "@testing-library/react";
import ThankYouView from "../components/ThankYouView/ThankYouView";
import "@testing-library/jest-dom";

test("Make sure that the ThankYouView is rendered", () => {
  render(<ThankYouView />);

  const image = screen.getByTestId("thank-you-image");
  expect(image).toBeInTheDocument();

  const ratingValue = screen.getByTestId("rating-value");
  expect(ratingValue).toBeInTheDocument();

  const thankYouHeader = screen.getByTestId("thank-you-header");
  expect(thankYouHeader).toBeInTheDocument();

  const thankYouDescription = screen.getByTestId("thank-you-description");
  expect(thankYouDescription).toBeInTheDocument();
});

test("Make sure that the ThankYouView is rendered with given props", () => {
  render(
    <ThankYouView
      ratingText={"You selected {value}"}
      rating={3}
      thankYouDescriptionText={"thank-you-description"}
      thankYouText={"thank-you-header"}
    />
  );

  const ratingValue = screen.getByText("You selected 3");
  expect(ratingValue).toBeInTheDocument();

  const thankYouHeader = screen.getByText("thank-you-header");
  expect(thankYouHeader).toBeInTheDocument();

  const thankYouDescription = screen.getByText("thank-you-description");
  expect(thankYouDescription).toBeInTheDocument();
});
