import { useState } from "react";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import { cardList } from "../../lib/data";
import { GlobalStyle } from "../../global.styled";
import { Wrapper } from "../../components/shared.styled";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [cards, setCards] = useState(cardList);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopNewCard />

        <Outlet />
        <Header setCards={setCards} cards={cards} />
        <Main cardList={cards} />
      </Wrapper>
    </>
  );
};

export default MainPage;
