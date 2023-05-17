import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadRobotActionCreator } from "../../store/robots/robotsSlice";
import useApi from "../../hooks/useApi";
import LoginForm from "../LoginForm/LoginForm";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  const { loadRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await loadRobots();
      dispatch(loadRobotActionCreator(robots.robots));
    })();
  }, [dispatch, loadRobots]);

  return (
    <>
      <Header title={"Robot List"} />
      <LoginForm />
    </>
  );
};

export default App;
