import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AppRoutes } from "./routes/AppRoutes";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  const isAuth = true;

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
      </Route>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
