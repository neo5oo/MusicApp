import MainPage from "./pages/MainPage";
import { Playbar } from "./components/Playbar/Playbar";
import style from "../src/global.module.scss";

const App = () => {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <Playbar />
    </div>
  );
};

export default App;
