import { styled } from "styled-components";

const LoginFormStyled = styled.form`
  background-color: lightgray;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;

  .username {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
  }

  .password {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
  }

  .label-username {
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  .label-password {
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  .button {
    margin-top: 20px;
    background-color: pink;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
`;
export default LoginFormStyled;
