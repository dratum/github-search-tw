import styles from "./Repository.module.css";
import { formatDate } from "@shared/helpers/formattedData";
import { RepositoryType } from "@shared/store/repositoriesStore";

type ExtendRepositoryType = RepositoryType &
  Partial<{
    description: string;
    archived: boolean;
    language: string;
    created_at: string;
    updated_at: string;
  }>;

type RepositoryMetadataProps = {
  repository: ExtendRepositoryType;
};

export const RepositoryMetadata = ({ repository }: RepositoryMetadataProps) => {
  const metadataItems = [
    {
      icon: '/star.svg',
      value: repository.stargazers_count,
      label: 'Количество звезд'
    },
    {
      icon: '/gitbranch.svg',
      value: repository.forks,
      label: 'Количество форков'
    },
    {
      icon: '/archive 1.svg',
      value: repository.archived ? "Да" : "Нет",
      label: 'в архиве'
    },
    {
      icon: '/Vector (8).svg',
      value: repository.language || "-",
      label: 'Язык'
    },
    {
      icon: '/create.svg',
      value: formatDate(repository.created_at || "-"),
      label: 'Создано'
    },
    {
      icon: '/create_1.svg',
      value: formatDate(repository.updated_at || "-"),
      label: 'Изменено'
    }
  ];

  return (
    <div className={styles.metaDataBlock}>
      {metadataItems.map((item, index) => (
        <div key={index}>
          <img src={item.icon} alt='icon' />
          <div className={styles.textMetaData}>
            <span>{item.value}</span>
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}; 