import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStructure } from "../../types";

export const initialRobotState: RobotStructure[] = [];

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotStructure[]>) => ({
      ...currentRobots,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotActionCreator } = robotsSlice.actions;

export const robotReducer = robotsSlice.reducer;
