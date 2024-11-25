import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import styles from "./Favorites.module.css";
import { RepoCard, DropDown } from "../../../shared/ui/index";
import repositoriesStore from "../../../shared/store/repositoriesStore";

export const FavoritesPage = observer(() => {
  return (
    <main>
      <NavLink to={"/"}>
        <img src='/Union.svg' alt='' />
        <span className={styles.back}>Back</span>
      </NavLink>
      <div className={styles.headers}>
        <h2>
          Favorites: {repositoriesStore.favRepositories.length} repositories
        </h2>
        <DropDown target={"favorites"} />
      </div>
      <div className={styles.container}>
        {repositoriesStore.favRepositories &&
          repositoriesStore.favRepositories.map((repo) => (
            <RepoCard key={repo.id} data={repo} />
          ))}
      </div>
    </main>
  );
});
