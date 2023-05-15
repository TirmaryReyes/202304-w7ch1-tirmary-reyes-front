export interface RobotStructure {
  _id: number;
  name: string;
  imageUrl: string;

  characteristics: {
    speed: number;
    resistance: number;
    creationDate: string;
  };
}

export interface RobotStateStructure {
  robots: RobotStructure[];
}
