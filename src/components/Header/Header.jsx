import { useState } from "react";
import { Container } from "../../styles/shared.styled";
import * as S from "./Header.styled";
import { appRoutes } from "../../lib/appRoutes";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen((prevState) => !prevState);
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
            <S.HeaderButtonMainNew to={appRoutes.ADD_TASK}>
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
