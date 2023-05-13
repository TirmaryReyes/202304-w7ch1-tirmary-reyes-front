import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types";
import robotMock from "../mocks/robotMock";
import { store } from "../../store";
import RobotCard from "./RobotCard";
import { Provider } from "react-redux";

describe("Given a RobotCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with Robot name", () => {
      const expectedHeading = "C3PO";
      const robot: RobotStructure = robotMock[0];

      render(
        <Provider store={store}>
          <RobotCard robot={robot} />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
