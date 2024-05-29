import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./routes/PrivateRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { appRoutes } from "./routes/appRoutes";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { useState } from "react";
import CardPage from "./pages/CardPage/CardPage";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [isAuth, setAuth] = useState(true);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.HOME} element={<MainPage />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
        </Route>
        <Route path={appRoutes.NOT_FOUND} element={<PageNotFound />} />
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
