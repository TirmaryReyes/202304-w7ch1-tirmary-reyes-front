import { useAppSelector } from "../../store";
import { RobotStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = (): JSX.Element => {
  const robots = useAppSelector((state): RobotStructure[] => state.robotStore);

  return (
    <article className="robotList">
      <h2 className="list-title">Robots List</h2>
      {robots.map((robot) => (
        <RobotCard key={robot.id} robot={robot} />
      ))}
    </article>
  );
};

export default RobotList;
