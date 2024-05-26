import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { cardList } from "./data";
import { GlobalStyle } from "./global.styled";
import { Wrapper } from "./components/shared.styled";

function App() {
  const [cards, setCards] = useState(cardList);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header setCards={setCards} cards={cards} />
        <Main cardList={cards} />
      </Wrapper>
    </>
  );
}

export default App;
