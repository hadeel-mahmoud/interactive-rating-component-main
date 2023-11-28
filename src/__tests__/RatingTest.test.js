import { render, screen } from "@testing-library/react";
import RateUsView from "../components/RatingView/RateUsView/RateUsView";
import store from "../store/store";
import { Provider } from "react-redux";
test("Make sure that the RateUsView is rendered", () => {
  render(
    <Provider store={store}>
      <RateUsView />
    </Provider>
  );

  const element = screen.getByTestId("submit-button");
  expect(element).toBeInTheDocument();
});
