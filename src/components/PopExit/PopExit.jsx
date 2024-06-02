import { appRoutes } from "../../lib/appRoutes";
import { Button } from "../../styles/shared.styled";
import * as S from "./PopExit.styled";

const PopExit = ({ logout }) => {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <Button $primary onClick={logout}>
                Да, выйти
              </Button>
              <S.ButtonNo to={appRoutes.HOME}>Нет, остаться</S.ButtonNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
