import { render, screen } from "@testing-library/react";
import RatingNumbers from "../components/RatingNumbers/RatingNumbers";
import "@testing-library/jest-dom";

test("Make sure that the RatingNumbers is rendered", () => {
  render(<RatingNumbers />);
  const ratingNumbers = screen.getByTestId("rating-numbers-1");
  expect(ratingNumbers).toBeInTheDocument();
});
