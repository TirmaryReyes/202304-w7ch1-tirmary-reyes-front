import { styled } from "styled-components";

const RobotCardStyled = styled.div`
  border: 2px solid grey;
  border-radius: 20px;
  padding: 20px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: fit-content;

  .robot-container__image {
    width: auto;
    object-fit: contain;
  }
`;

export default RobotCardStyled;
