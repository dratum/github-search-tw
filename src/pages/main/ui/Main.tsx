import styles from "./Main.module.css";
import { observer } from "mobx-react-lite";
import { Search, RepoCard, DropDown } from "@shared/ui/index";
import repositoriesStore from "@shared/store/repositoriesStore";

export const MainPage = observer(() => {
  return (
    <main>
      <Search />
      <div className={styles.headers}>
        <h2>Result: {repositoriesStore.repositories.length} repositories</h2>
        <DropDown target={"repositories"} />
      </div>
      <div className={styles.container}>
        {repositoriesStore.repositories.length > 0 &&
          repositoriesStore.repositories.map((repo) => (
            <RepoCard key={repo.id} data={repo} />
          ))}
      </div>
    </main>
  );
});
