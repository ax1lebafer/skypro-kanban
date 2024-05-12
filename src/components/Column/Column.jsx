import Card from "../Card/Card";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            category={card.topic}
            title={card.title}
            color={card.color}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
