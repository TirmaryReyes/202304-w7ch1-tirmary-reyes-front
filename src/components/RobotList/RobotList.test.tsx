import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/testUtils";

import robotMock from "../mocks/robotMock";
import RobotList from "./RobotList";
import { RobotStructure } from "../../types";

describe("Given a RobotList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of Robots with one Robot", () => {
      const robotList: RobotStructure[] = robotMock;

      renderWithProviders(<RobotList />, { robotStore: robotList });

      const heading = screen.getByRole("heading", { name: robotList[0].name });

      expect(heading).toBeInTheDocument();
    });
  });
});
