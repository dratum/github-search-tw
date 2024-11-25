import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { Counter } from "../counter/Counter";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [lastRoute, setLastRoute] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // функция для сохранения истории просмотра
  // последнего репозитория по клику на иконку-профиль
  const handleLastRouteClick = () => {
    if (lastRoute) {
      navigate(lastRoute);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/favorites") {
      setLastRoute(location.pathname);
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='/src/assets/search_new.svg' width={"24px"} alt='logo' />{" "}
        <NavLink to='/'>
          <span>GitHubSearch</span>
        </NavLink>
      </div>
      <div className={styles.buttons}>
        <NavLink to='/favorites'>
          <Counter />
          <img src='/src/assets/Vector.svg' width={"14px"} alt='fav-repo' />
        </NavLink>
        <img
          className={styles.profilePage}
          src='/src/assets/account.svg'
          width={"20px"}
          alt='profile'
          onClick={handleLastRouteClick}
        />
      </div>
    </header>
  );
};
