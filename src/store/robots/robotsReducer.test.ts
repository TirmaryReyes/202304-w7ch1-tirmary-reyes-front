import robotMock from "../../mocks/robotMock";
import { RobotStructure } from "../../types";
import { loadRobotActionCreator, robotReducer } from "./robotsSlice";

describe("Given a loadRobotReducer reducer", () => {
  describe("When it receives an empty robot list and loadRobot action with one robot", () => {
    test("Then it should return that robot", () => {
      const initialRobotState: RobotStructure[] = [];
      const expectedRobotState: RobotStructure[] = robotMock;

      const expectedNewState = {
        robots: expectedRobotState,
      };

      const loadRobotAction = loadRobotActionCreator(expectedRobotState);

      const newRobotState = robotReducer(initialRobotState, loadRobotAction);

      expect(expectedNewState).toStrictEqual(newRobotState);
    });
  });
});
