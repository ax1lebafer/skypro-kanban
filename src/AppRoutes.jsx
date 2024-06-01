import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { appRoutes } from "./lib/appRoutes";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { useState } from "react";
import CardPage from "./pages/CardPage/CardPage";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";

const AppRoutes = () => {
  const [isAuth, setAuth] = useState(true);

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setAuth(true);
    navigate(appRoutes.HOME);
  };

  const logout = () => {
    setAuth(false);
    navigate(appRoutes.LOGIN);
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.HOME} element={<MainPage />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
        <Route path={appRoutes.NOT_FOUND} element={<PageNotFound />} />
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
