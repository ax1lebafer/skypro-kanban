import * as S from "./LoginPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useEffect, useState } from "react";
import { login } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({ setAuth, setUserData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setAuth(true);
      setUserData(user);
      navigate(appRoutes.HOME);
    }
  }, [setAuth, setUserData, navigate]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!formValues.login) {
      setError("Введите логин");
      return;
    }

    if (!formValues.password) {
      setError("Введите пароль");
      return;
    }

    try {
      const response = await login({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response.user);

      setError(null);
      setAuth(true);
      setUserData(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate(appRoutes.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSigin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitleWrapper>
              <S.ModalTitle>Вход</S.ModalTitle>
            </S.ModalTitleWrapper>
            <S.ModalFormLogin id="formLogIn" action="#" onSubmit={onLogin}>
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formValues.login}
                onChange={onInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
              <S.ModalButtonEnter id="btnEnter" type="submit">
                Войти
              </S.ModalButtonEnter>
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              <S.ModalFormGroup>
                <S.ModalFormText>Нужно зарегистрироваться?</S.ModalFormText>
                <S.ModalFormLink to={appRoutes.REGISTER}>
                  Регистрируйтесь здесь
                </S.ModalFormLink>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSigin>
    </S.Wrapper>
  );
};
