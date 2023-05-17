import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import userUser from "../../hooks/useUser";

const LoginForm = (): JSX.Element => {
  interface UserLogin {
    username: string;
    password: string;
  }

  const [userState, setUserState] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const { getUserToken } = userUser();

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      username: event.target.value,
    });
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      password: event.target.value,
    });
  };
  const handlerSumit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    await getUserToken(userState);
  };

  return (
    <LoginFormStyled className="form" onSubmit={handlerSumit}>
      <div>
        <label className="label-username" htmlFor="username">
          {" "}
          Username:
        </label>
        <input
          className="username"
          id="username"
          type="text"
          required
          onChange={onChangeUsername}
          placeholder="username"
        ></input>
      </div>
      <div>
        <label className="label-password" htmlFor="password">
          {" "}
          Password:
        </label>
        <input
          className="password"
          id="password"
          type="password"
          required
          onChange={onChangePassword}
          placeholder="password"
        ></input>
      </div>
      <button className="button">Log in</button>
    </LoginFormStyled>
  );
};
export default LoginForm;
