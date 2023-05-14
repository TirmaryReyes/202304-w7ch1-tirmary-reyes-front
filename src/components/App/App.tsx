import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadRobotActionCreator } from "../../store/robots/robotsSlice";
import useApi from "../../hooks/useApi";
import AppStyled from "./AppStyled";
import RobotList from "../RobotList/RobotList";

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
    <AppStyled>
      <header className="header-container__title">
        <h1 className="main-title">Robot List</h1>
      </header>
      <RobotList />
    </AppStyled>
  );
};

export default App;
