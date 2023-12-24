import tracksList from "../assets/tracksList";
import style from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={style.search}>
      <>Поиск треков</>
      <div className={style.list}>
        {tracksList.map((track) => (
          <div>{JSON.stringify(track)}</div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
