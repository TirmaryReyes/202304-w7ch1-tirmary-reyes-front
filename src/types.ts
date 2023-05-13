export interface RobotStructure {
  id: number;
  name: string;
  imageUrl: string;

  characteristics: {
    speed: number;
    endurance: number;
    createDate: string;
  };
}
