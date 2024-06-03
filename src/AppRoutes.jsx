import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { appRoutes } from "./lib/appRoutes";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { useState } from "react";
import CardPage from "./pages/CardPage/CardPage";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";

const AppRoutes = () => {
  const [isAuth, setAuth] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("user");
    navigate(appRoutes.LOGIN);
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.HOME} element={<MainPage userData={userData} />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
        <Route path={appRoutes.NOT_FOUND} element={<PageNotFound />} />
      </Route>
      <Route
        path={appRoutes.LOGIN}
        element={<LoginPage setAuth={setAuth} setUserData={setUserData} />}
      />
      <Route
        path={appRoutes.REGISTER}
        element={<RegisterPage setUserData={setUserData} />}
      />
    </Routes>
  );
};

export default AppRoutes;
