import styles from "./Repository.module.css";
import { RepositoryType } from "@shared/store/repositoriesStore";

type RepositoryProfileProps = {
  repository: RepositoryType;
};

export const RepositoryProfile = ({ repository }: RepositoryProfileProps) => {
  return (
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
  );
}; 