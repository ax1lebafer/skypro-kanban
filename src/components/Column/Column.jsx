import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, taskList }) => {
  return (
    <S.Column>
      <S.ColumnTitle>
        <S.ColumnText>{title}</S.ColumnText>
      </S.ColumnTitle>
      <S.Cards>
        {taskList.map((card) => (
          <Card
            key={card._id}
            category={card.topic}
            title={card.title}
            date={card.date}
            id={card._id}
          />
        ))}
      </S.Cards>
    </S.Column>
  );
};

export default Column;
