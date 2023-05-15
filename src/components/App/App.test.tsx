import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "../../testUtils/testUtils";
import robotMock from "../../mocks/robotMock";
import { RobotStateStructure } from "../../types";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'Robot List", () => {
      const expectedText = "Robot List";
      const robotList: RobotStateStructure = { robots: robotMock };

      renderWithProviders(<App />, { robotStore: robotList });

      const text = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
