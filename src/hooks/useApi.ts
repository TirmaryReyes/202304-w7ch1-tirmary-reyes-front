import { useCallback } from "react";
import { RobotStateStructure } from "../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const loadRobots = useCallback(async (): Promise<RobotStateStructure> => {
    const { data: robots } = await axios.get<RobotStateStructure>(
      `${apiUrl}robots`
    );
    return robots;
  }, []);

  return { loadRobots };
};

export default useApi;
