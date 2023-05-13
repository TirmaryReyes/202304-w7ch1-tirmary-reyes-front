import { RobotStructure } from "../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const loadRobots = async (): Promise<RobotStructure[]> => {
    const { data } = await axios.get<RobotStructure[]>(`${apiUrl}robots`);
    return data;
  };

  return { loadRobots };
};

export default useApi;
