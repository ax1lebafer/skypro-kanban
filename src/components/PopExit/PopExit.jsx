import { Button } from "../shared.styled";

const PopExit = () => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Button $primary>Да, выйти</Button>
              <Button>Нет, остаться</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
