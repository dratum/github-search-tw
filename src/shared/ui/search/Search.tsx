import { useState } from "react";
import styles from "./Search.module.css";
import repositoriesStore from "../../store/repositoriesStore";

export const Search = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    repositoriesStore.getSearchRepositories(newValue);
  };

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      className={styles.input}
      placeholder='Search'
    />
  );
};
