import { appRoutes } from "../../routes/appRoutes";
import { Button } from "../shared.styled";
import * as S from "./PopExit.styled";

const PopExit = ({ logout }) => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Button $primary onClick={logout}>
                Да, выйти
              </Button>
              <S.ButtonNo to={appRoutes.HOME}>Нет, остаться</S.ButtonNo>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
