import "./DropDownSort.module.css";
import repositoriesStore from "../../store/repositoriesStore";

export const DropDown = ({ target }: { target: string }) => {
  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    repositoriesStore.sortRepositories(target, e.target.value);
  };
  return (
    <select onChange={handleChangeSort}>
      <option value='default'>-</option>
      <option value='stars'>Stars</option>
      <option value='alphabet'>A - Z</option>
    </select>
  );
};
