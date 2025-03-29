import { observer } from "mobx-react-lite";
import styles from "./Favorites.module.css";
import { RepoCard, DropDown } from "@shared/ui/index";
import repositoriesStore from "@shared/store/repositoriesStore";
import { BackNavigation } from "@shared/ui/backNavigation/BackNavigation";

export const FavoritesPage = observer(() => {
  return (
    <main>
      <BackNavigation/>
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
