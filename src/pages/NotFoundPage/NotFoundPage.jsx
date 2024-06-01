import { GlobalStyle } from "../../global.styled";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "./NotFoundPage.styled";

const PageNotFound = () => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>404</S.Title>
        <S.Description>Страница не найдена</S.Description>
        <S.HomeButton to={appRoutes.HOME}>Вернуться на главную</S.HomeButton>
      </S.Container>
    </>
  );
};

export default PageNotFound;
