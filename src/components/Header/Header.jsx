import { useState } from "react";
import { Container } from "../../styles/shared.styled";
import * as S from "./Header.styled";
import { appRoutes } from "../../lib/appRoutes";

const Header = ({ setTasks, tasks }) => {
  const [isOpen, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen((prevState) => !prevState);
  }

  function onAddCard() {
    const newTask = {
      _id: Date.now(),
      topic: "Web Design",
      title: "New Task",
      date: "17.04.2024",
      status: "Без статуса",
      color: "orange",
    };
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
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
                <S.ExitLink to={appRoutes.EXIT}>
                  <S.Button>Выйти</S.Button>
                </S.ExitLink>
              </S.PopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
