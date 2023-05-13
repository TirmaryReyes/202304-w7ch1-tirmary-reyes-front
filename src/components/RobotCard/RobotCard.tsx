import { RobotStructure } from "../../types";

interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    imageUrl,
    name,
    characteristics: { createDate, endurance, speed },
  },
}: RobotProps): JSX.Element => {
  return (
    <article className="robot-container">
      <h3 className="robot-container__title">{name}</h3>
      <img src={imageUrl} alt={`${name} robot`} />
      <ul className="robot-container__characteristics">
        <li className="robot-container__list">{`Creation date: ${createDate}`}</li>
        <li className="robot-container__list">{`Endurance: ${endurance}`}</li>
        <li className="robot-container__list">{`Speed: ${speed}`}</li>
      </ul>
    </article>
  );
};

export default RobotCard;
