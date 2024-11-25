import styles from "./RepoCard.module.css";
import { observer } from "mobx-react-lite";
import { useRepoActions } from "../../hooks/useRepoActions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RepositoryType } from "../../store/repositoriesStore";

export const RepoCard = observer(({ data }: { data: RepositoryType }) => {
  const { isLiked, copied, handleLikeRepo, handleDetailsClick, handleCopy } =
    useRepoActions(data.id);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img
          className={styles.avatar}
          src={data.owner.avatar_url}
          width={32}
          height={32}
          alt='logo-author'
        />
        <span>
          <img src='/star.svg' alt='star-icon' />
          {data.stargazers_count}
        </span>
        <span>
          <img src='/gitbranch.svg' alt='fork-logo' />
          {data.forks}
        </span>
      </div>
      <div className={styles.author}>
        <p className={styles.authorFont}>{data.owner.login}</p>
        <a href={data.html_url}>
          <span>{data.full_name}</span>
        </a>
      </div>
      <div className={styles.buttons}>
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
        <CopyToClipboard text={`${data.html_url}`} onCopy={handleCopy}>
          {copied ? (
            <span>Copied</span>
          ) : (
            <button className={styles.linkButton} aria-label='Link'>
              <img src='/link.svg' alt='' aria-hidden='true' />
            </button>
          )}
        </CopyToClipboard>

        <button onClick={handleDetailsClick} className={styles.description}>
          Подробнее
        </button>
      </div>
    </div>
  );
});
