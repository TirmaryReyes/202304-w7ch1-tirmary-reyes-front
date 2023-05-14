import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadRobotActionCreator } from "../../store/robots/robotsSlice";
import useApi from "../../hooks/useApi";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { loadRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await loadRobots();
      dispatch(loadRobotActionCreator(robots));
    })();
  }, [dispatch, loadRobots]);

  return (
    <AppStyled>
      <header className="header-container__title">
        <h1 className="main-title">Robots</h1>
      </header>
    </AppStyled>
  );
};

export default App;
