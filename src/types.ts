export interface RobotStructure {
  _id: number;
  name: string;
  imageUrl: string;

  characteristics: {
    speed: number;
    endurance: number;
    createDate: string;
  };
}

export interface RobotStateStructure {
  robots: RobotStructure[];
}
