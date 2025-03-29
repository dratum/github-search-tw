import styles from "./Repository.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { RepositoryType } from "@shared/store/repositoriesStore";

type RepositoryActionsProps = {
  repository: RepositoryType;
  isLiked: boolean;
  handleLikeRepo: () => void;
  handleCopy: () => void;
  copied: boolean;
};

export const RepositoryActions = ({
  repository,
  isLiked,
  handleLikeRepo,
  handleCopy,
  copied
}: RepositoryActionsProps) => {
  return (
    <div className={styles.buttons}>
      <CopyToClipboard text={`${repository.html_url}`} onCopy={handleCopy}>
        {copied ? (
          <span>Copied</span>
        ) : (
          <button className={styles.linkButton} aria-label='Link'>
            <img src='/link.svg' alt='' aria-hidden='true' />
          </button>
        )}
      </CopyToClipboard>
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
  );
}; 