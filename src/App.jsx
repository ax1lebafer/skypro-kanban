import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);

  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header setCards={setCards} cards={cards}/>
      <Main cardList={cards} />
    </div>
  );
}

export default App;
