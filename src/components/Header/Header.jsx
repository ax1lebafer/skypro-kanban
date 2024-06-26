import { useState } from "react";
import { Container } from "../../styles/shared.styled";
import * as S from "./Header.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { userData } = useUser();
  const { theme, /* toggleTheme */ } = useTheme();

  function handleOpenModal() {
    setOpen((prevState) => !prevState);
  }

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight $theme={theme}>
            <S.LogoLink to={appRoutes.HOME}>
              <S.HeaderLogoImage src="images/logo.png" alt="logo" />
            </S.LogoLink>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark $theme={theme}>
            <S.LogoLink to={appRoutes.HOME}>
              <S.HeaderLogoImage src="images/logo_dark.png" alt="logo" />
            </S.LogoLink>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderButtonMainNew to={appRoutes.ADD_TASK}>
              Создать новую задачу
            </S.HeaderButtonMainNew>
            <S.HeaderUser onClick={handleOpenModal}>
              {userData.name}
            </S.HeaderUser>
            {isOpen && (
              <S.PopUserSet>
                <S.PopUserSetName>{userData.name}</S.PopUserSetName>
                <S.PopUserSetMail>{userData.login}</S.PopUserSetMail>
                {/* <S.PopUserSetTheme>
                  <S.PopUserSetThemeText>Темная тема</S.PopUserSetThemeText>
                  <S.InputCheckbox
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                </S.PopUserSetTheme> */}
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
