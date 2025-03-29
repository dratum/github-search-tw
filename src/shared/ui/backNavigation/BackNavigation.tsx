import { NavLink } from "react-router-dom";
import styles from "./Back.module.css";

export const BackNavigation = () => {
  return (
    <NavLink className={styles.navLink} to={"/"}>
      <img src='/Union.svg' alt='' />
      <span className={styles.back}>Back</span>
    </NavLink>
  );
}; 