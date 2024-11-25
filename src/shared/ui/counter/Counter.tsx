import styles from "./Counter.module.css";
import { observer } from "mobx-react-lite";
import repositoriesStore from "../../store/repositoriesStore";

export const Counter = observer(() => {
  return (
    <span className={styles.counter}>
      {repositoriesStore.favRepositories.length}
    </span>
  );
});
