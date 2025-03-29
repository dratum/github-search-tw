import "./App.css";
import { Header } from "@shared/ui/header/Header";
import { MainPage } from "@pages/main";
import { FavoritesPage } from "@pages/favorite";
import { RepositoryPage } from "@pages/repo";
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
