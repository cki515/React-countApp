import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import Header from "./pages/Header";
import { NoticeSnackbar } from "./state/main";

function App() {
  return (
    <>
      <Header />
      <NoticeSnackbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/history" />} />
      </Routes>
    </>
  );
}

export default App;
