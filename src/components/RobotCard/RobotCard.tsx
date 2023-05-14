import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    imageUrl,
    name,
    characteristics: { creationDate, resistance, speed },
  },
}: RobotProps): JSX.Element => {
  return (
    <RobotCardStyled className="robot-container">
      <img
        className="robot-container__image"
        width={200}
        height={200}
        src={imageUrl}
        alt={`${name} robot`}
      />
      <ul className="robot-container__characteristics">
        <li className="robot-container__name"> {name}</li>
        <li className="robot-container__list">{`Creation Data: ${creationDate}`}</li>
        <li className="robot-container__list">{`Resistance: ${resistance}`}</li>
        <li className="robot-container__list">{`Speed: ${speed}`}</li>
      </ul>
    </RobotCardStyled>
  );
};

export default RobotCard;
