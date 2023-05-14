import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import RobotCard from "./components/RobotCard/RobotCard";
import robotMock from "./mocks/robotMock";
import RobotList from "./components/RobotList/RobotList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
      <RobotList />
      <RobotCard robot={robotMock[0]} />
    </Provider>
  </React.StrictMode>
);
