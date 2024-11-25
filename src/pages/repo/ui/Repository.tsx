import { observer } from "mobx-react-lite";
import styles from "./Repository.module.css";
import repositoriesStore, {
  RepositoryType,
} from "../../../shared/store/repositoriesStore";
import { NavLink, useParams } from "react-router-dom";
import { formatDate } from "../../../shared/helpers/formattedData";
import { useRepoActions } from "../../../shared/hooks/useRepoActions";

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
  const { isLiked, handleLikeRepo } = useRepoActions(Number(id));

  return (
    repository && (
      <>
        <NavLink className={styles.navLink} to={"/"}>
          <img src='/src/assets/Union.svg' alt='' />
          <span className={styles.back}>Back</span>
        </NavLink>
        <div className={styles.repoPage}>
          <h2>Профиль</h2>
          <div className={styles.top}>
            <img
              src={repository.owner.avatar_url}
              alt='profile-pic'
              width={125}
              className={styles.profilePic}
            />
            <div className={styles.topText}>
              <h3>{repository.full_name}</h3>
              <p>{repository.description}</p>
            </div>
          </div>
          <div className={styles.metaDataBlock}>
            <div>
              <img src='/src/assets/star.svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{repository.stargazers_count}</span>
                <span>Количество звезд</span>
              </div>
            </div>
            <div>
              <img src='/src/assets/gitbranch.svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{repository.forks}</span>
                <span>Количество форков</span>
              </div>
            </div>
            <div>
              <img src='/src/assets/archive 1.svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{repository.archived ? "Да" : "Нет"} </span>
                <span>в архиве</span>
              </div>
            </div>
            <div>
              <img src='/src/assets/Vector (8).svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{repository.language || "-"}</span>
                <span>Язык</span>
              </div>
            </div>
            <div>
              <img src='/src/assets/create.svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{formatDate(repository.created_at || "-")}</span>
                <span>Создано</span>
              </div>
            </div>
            <div>
              <img src='/src/assets/create_1.svg' alt='icon' />
              <div className={styles.textMetaData}>
                <span>{formatDate(repository.updated_at || "-")}</span>
                <span>Изменено</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.linkButton} aria-label='Link'>
              <img src='/src/assets/link.svg' alt='' aria-hidden='true' />
            </button>
            <button
              className={styles.likeButton}
              aria-label='Like'
              onClick={handleLikeRepo}
            >
              <svg
                width='20'
                height='17'
                viewBox='0 0 20 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19 5.60227C19 11.2273 10 16 10 16C10 16 1 11.2273 1 5.60227C1 4.38167 1.49234 3.21107 2.36871 2.34797C3.24508 1.48488 4.4337 1 5.67308 1C7.62798 1 9.3025 2.04915 10 3.72727C10.6975 2.04915 12.372 1 14.3269 1C15.5663 1 16.7549 1.48488 17.6313 2.34797C18.5077 3.21107 19 4.38167 19 5.60227Z'
                  fill={isLiked ? "rgba(212, 67, 51, 1)" : "white"}
                  stroke={isLiked ? "rgba(212, 67, 51, 1)" : "#3A3A3A"}
                  stroke-width='1.5'
                />
              </svg>
            </button>
            <a href={repository.html_url}>
              <button className={styles.openButton}>Открыть репозиторий</button>
            </a>
          </div>
        </div>
      </>
    )
  );
});
//  можно при желании отрефакторить, чтобы уменьшить количество строк
