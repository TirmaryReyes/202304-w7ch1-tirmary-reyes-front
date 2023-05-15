import robotMock from "../../mocks/robotMock";
import { RobotStateStructure } from "../../types";
import { loadRobotActionCreator, robotReducer } from "./robotsSlice";

describe("Given a loadRobotReducer reducer", () => {
  describe("When it receives an empty robot list and loadRobot action with one robot", () => {
    test("Then it should return that robot", () => {
      const initialRobotState: RobotStateStructure = { robots: [] };
      const expectedRobotState: RobotStateStructure = { robots: robotMock };

      const loadRobotAction = loadRobotActionCreator(expectedRobotState.robots);

      const newRobotState: RobotStateStructure = robotReducer(
        initialRobotState,
        loadRobotAction
      );

      expect(expectedRobotState).toStrictEqual(newRobotState);
    });
  });
});
