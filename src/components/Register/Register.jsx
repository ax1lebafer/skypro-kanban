import * as S from "./Register.styled";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { register } from "../../lib/api";
import { useUser } from "../../hooks/useUser";

const Register = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
    name: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegister = async (event) => {
    event.preventDefault();

    if (!formValues.name) {
      setError("Введите имя!");
      return;
    }

    if (!formValues.login) {
      setError("Введите логин!");
      return;
    }

    if (!formValues.password) {
      setError("Введите пароль!");
      return;
    }

    try {
      const response = await register({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });

      setUser(response.user);
      navigate(appRoutes.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>
              <S.ModalTitleText>Регистрация</S.ModalTitleText>
            </S.ModalTitle>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
                value={formValues.name}
                onChange={onInputChange}
              />
              <S.ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={formValues.login}
                onChange={onInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
              <S.ModalButtonSignup id="SignUpEnter" onClick={onRegister}>
                <S.ModalButtonLink to={appRoutes.REGISTER}>
                  Зарегистрироваться
                </S.ModalButtonLink>{" "}
              </S.ModalButtonSignup>
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              <S.ModalFormGroup>
                <S.ModalFormText>
                  Уже есть аккаунт?{" "}
                  <S.ModalFormLink to={appRoutes.LOGIN}>
                    Войдите здесь
                  </S.ModalFormLink>
                </S.ModalFormText>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

export default Register;
