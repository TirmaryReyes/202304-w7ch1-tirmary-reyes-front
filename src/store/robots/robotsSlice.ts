import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStateStructure, RobotStructure } from "../../types";

export const initialRobotState: RobotStateStructure = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<RobotStructure[]>
    ): RobotStateStructure => ({
      ...currentRobotsState,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotActionCreator } = robotsSlice.actions;

export const robotReducer = robotsSlice.reducer;
