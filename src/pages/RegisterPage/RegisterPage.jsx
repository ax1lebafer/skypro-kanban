import { appRoutes } from "../../lib/appRoutes";
import * as S from "./RegisterPage.styled";

export const RegisterPage = () => {
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
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalButtonSignup id="SignUpEnter">
                <S.ModalButtonLink to={appRoutes.REGISTER}>
                  Зарегистрироваться
                </S.ModalButtonLink>{" "}
              </S.ModalButtonSignup>
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
