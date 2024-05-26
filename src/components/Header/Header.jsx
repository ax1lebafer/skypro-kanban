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
          <S.HeaderLogoLight>
            <S.LogogLink href="" target="_self">
              <S.HeaderLogoImage src="images/logo.png" alt="logo" />
            </S.LogogLink>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <S.LogogLink href="" target="_self">
              <S.HeaderLogoImage src="images/logo_dark.png" alt="logo" />
            </S.LogogLink>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderButtonMainNew onClick={onAddCard}>
              Создать новую задачу
            </S.HeaderButtonMainNew>
            <S.HeaderUser onClick={handleOpenModal}>Ivan Ivanov</S.HeaderUser>
            {isOpen && (
              <S.PopUserSet>
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <S.PopUserSetThemeText>Темная тема</S.PopUserSetThemeText>
                  <S.InputCheckbox />
                </S.PopUserSetTheme>
                <S.Link href="#popUser">
                  <S.Button>Выйти</S.Button>
                </S.Link>
              </S.PopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
