import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const AppRoutes = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  EXIT: "/exit",
  CARD: "/card",
  NOT_FOUND: "*",
};

function App() {
  const isAuth = true;

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
