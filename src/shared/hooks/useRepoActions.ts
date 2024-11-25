import { useState } from "react";
import { useNavigate } from "react-router-dom";
import repositoriesStore from "../store/repositoriesStore";

export const useRepoActions = (repoId: number) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleLikeRepo = () => {
    if (repositoriesStore.isRepositoryLiked(repoId)) {
      repositoriesStore.dislikeRepository(repoId);
    } else {
      repositoriesStore.likeRepository(repoId);
    }
  };
  const isLiked = repositoriesStore.isRepositoryLiked(repoId);

  const handleDetailsClick = () => {
    navigate(`/repo/${repoId}`);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    copied,
    handleLikeRepo,
    handleDetailsClick,
    handleCopy,
    isLiked,
  };
};
