import { GlobalStyle } from "../../global.styled";
import * as S from "./LoginPage.styled";
import { appRoutes } from "../../routes/appRoutes";

export const LoginPage = () => {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerSigin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitleWrapper>
                <S.ModalTitle>Вход</S.ModalTitle>
              </S.ModalTitleWrapper>
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalButtonEnter id="btnEnter">
                  <S.ModalButtonLink to={appRoutes.HOME}>
                    Войти
                  </S.ModalButtonLink>
                </S.ModalButtonEnter>
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
    </>
  );
};
