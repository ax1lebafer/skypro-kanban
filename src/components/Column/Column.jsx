import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    <S.Column>
      <S.ColumnTitle>
        <S.ColumnText>{title}</S.ColumnText>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => (
          <Card
            key={card.id}
            category={card.topic}
            title={card.title}
            date={card.date}
            id={card.id}
          />
        ))}
      </S.Cards>
    </S.Column>
  );
};

export default Column;
