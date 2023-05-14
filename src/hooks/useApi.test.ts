import { renderHook } from "@testing-library/react";
import robotMock from "../mocks/robotMock";
import useApi from "./useApi";

describe("Given a useApi custom hook", () => {
  describe("When loadRobots is called", () => {
    test("Then it should return a list of robots", async () => {
      const expectedList = robotMock;

      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi());

      const robotsList = await loadRobots();

      expect(robotsList).toStrictEqual(expectedList);
    });
  });
});
