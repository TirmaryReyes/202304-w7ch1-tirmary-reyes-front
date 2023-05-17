import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0.5rem 1rem 0.5rem 0.2rem;
  height: 100px;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  .header-container__title {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    font-weight: bold;
  }
`;

export default HeaderStyled;
