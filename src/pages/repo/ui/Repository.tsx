import { observer } from "mobx-react-lite";
import styles from "./Repository.module.css";
import repositoriesStore, { RepositoryType } from "@shared/store/repositoriesStore";
import { useParams } from "react-router-dom";
import { useRepoActions } from "@shared/hooks/useRepoActions";
import { BackNavigation } from "./BackNavigation";
import { RepositoryProfile } from "./RepositoryProfile";
import { RepositoryMetadata } from "./RepositoryMetadata";
import { RepositoryActions } from "./RepositoryActions";

type ExtendRepositoryType = RepositoryType &
  Partial<{
    description: string;
    archived: boolean;
    language: string;
    created_at: string;
    updated_at: string;
  }>;

export const RepositoryPage = observer(() => {
  const { id } = useParams();
  const repository: ExtendRepositoryType | undefined =
    repositoriesStore.repositories.find((repo) => repo.id === Number(id));
  const { isLiked, handleLikeRepo, handleCopy, copied } = useRepoActions(
    Number(id)
  );

  if (!repository) return null;

  return (
    <>
      <BackNavigation />
      <div className={styles.repoPage}>
        <h2>Профиль</h2>
        <RepositoryProfile repository={repository} />
        <RepositoryMetadata repository={repository} />
        <RepositoryActions
          repository={repository}
          isLiked={isLiked}
          handleLikeRepo={handleLikeRepo}
          handleCopy={handleCopy}
          copied={copied}
        />
      </div>
    </>
  );
});
