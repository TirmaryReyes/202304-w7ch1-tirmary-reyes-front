export interface RobotStructure {
  id: number;
  name: string;
  imageUrl: string;

  characteristics: {
    speed: number;
    resistance: number;
    creationDate: string;
  };
}

export interface RobotStoreStructure {
  robots: RobotStructure[];
}
