import { useState } from "react";
import { Container } from "../shared.styled";
import * as S from "./Header.styled";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen((prevState) => !prevState);
  }

  function onAddCard() {
    const newCard = {
      id: Date.now(),
      topic: "Web Design",
      title: "New Task",
      date: "17.04.2024",
      status: "Без статуса",
      color: "orange",
    };
    const newCardList = [...cards, newCard];
    setCards(newCardList);
  }

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button
              onClick={onAddCard}
              className="header__btn-main-new _hover01"
            >
              Создать новую задачу
            </button>
            <button onClick={handleOpenModal} className="header__user _hover02">
              Ivan Ivanov
            </button>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
