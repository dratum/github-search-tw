import { makeAutoObservable, runInAction } from "mobx";
import { throttle } from "../helpers/throttle";

export type RepositoryType = {
  id: number;
  owner: {
    avatar_url: string;
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  full_name: string;
  description: string;
};

class Repositories {
  repositories: RepositoryType[] = [];
  favRepositories: RepositoryType[] = [];
  constructor() {
    makeAutoObservable(this);
    this.getSearchRepositories = throttle(
      this.getSearchRepositories.bind(this),
      1000
    );
  }

  async getSearchRepositories(query: string) {
    if (!query.trim()) {
      runInAction(() => {
        this.repositories = [];
      });
      return;
    }
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=12`
      );
      const data = await response.json();

      runInAction(() => {
        this.repositories = data.items || [];
      });
    } catch (error) {
      console.error("Failed to fetch repositories", error);
      runInAction(() => {
        this.repositories = [];
      });
    }
  }
  //
  likeRepository(id: number) {
    const repository = this.repositories.find((el) => el.id === id);
    if (
      repository &&
      !this.favRepositories.find((el) => el.id === repository.id)
    ) {
      this.favRepositories.push(repository);
    }
  }

  dislikeRepository(id: number) {
    runInAction(() => {
      this.favRepositories = this.favRepositories.filter((el) => el.id !== id);
    });
  }

  isRepositoryLiked(id: number): boolean {
    return this.favRepositories.some((repo) => repo.id === id);
  }

  sortRepositories(target: string, value: string) {
    const targetArray =
      target === "repositories" ? this.repositories : this.favRepositories;
    if (value === "stars") {
      targetArray.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (value === "alphabet") {
      targetArray.sort((a, b) => a.full_name.localeCompare(b.full_name));
    } else {
      return targetArray;
    }
  }
}

export default new Repositories();
