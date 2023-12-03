import { fireEvent, render, screen } from "@testing-library/react";
import RateUsView from "../components/RatingView/RateUsView/RateUsView";
import store from "../store/store";
import { Provider } from "react-redux";
import RatingView from "../components/RatingView/RatingView";
test("Make sure that the RateUsView is rendered", () => {
  render(
    <Provider store={store}>
      <RateUsView />
    </Provider>
  );

  const element = screen.getByTestId("submit-button");
  expect(element).toBeInTheDocument();
});

test("Make sure that the ThankYouView is rendered on Submit ONLY IF a rating is chosen", () => {
  render(
    <Provider store={store}>
      <RatingView />
    </Provider>
  );
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  const element = screen.getByTestId("rating-value");
  expect(element).toBeInTheDocument();
});
