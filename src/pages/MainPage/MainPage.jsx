import { useState } from "react";
// import "./App.css";
import Main from "../../components/Main/Main";
import PopBrowse from "../../components/PopBrowse/PopBrowse";
import PopExit from "../../components/PopExit/PopExit";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import { cardList } from "../../data";
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
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Outlet />
        <Header setCards={setCards} cards={cards} />
        <Main cardList={cards} />
      </Wrapper>
    </>
  );
};

export default MainPage;
