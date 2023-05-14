import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'Robot List", () => {
      const expectedText = "Robot List";

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const text = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
