import "./App.css";
import { Header } from "../shared/ui/header/Header.tsx";
import { MainPage } from "../pages/main/index.ts";
import { FavoritesPage } from "../pages/favorite/index.ts";
import { RepositoryPage } from "../pages/repo/index.ts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<MainPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/repo/:id' element={<RepositoryPage />} />
      </Routes>
    </>
  );
}

export default App;
