import { useAppSelector } from "../../store";
import { RobotStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  const robots = useAppSelector((state): RobotStructure[] => state.robotStore);

  return (
    <RobotListStyled>
      <article className="robotList">
        <h2 className="list-title">Robots List</h2>
        {robots.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </article>
    </RobotListStyled>
  );
};

export default RobotList;
