import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import { appRoutes } from "./lib/appRoutes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.HOME} element={<MainPage />}>
          <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
