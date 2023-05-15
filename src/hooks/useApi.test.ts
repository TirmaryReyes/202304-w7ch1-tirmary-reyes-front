import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { RobotStructure } from "../types";
import robotMock from "../mocks/robotMock";

describe("Given a useApi custom hook", () => {
  describe("When loadRobots is called", () => {
    test("Then it should return a list of robots", async () => {
      const expectedList: RobotStructure[] = robotMock;

      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi());

      const robots = await loadRobots();

      expect(robots.robots).toStrictEqual(expectedList);
    });
  });
});
