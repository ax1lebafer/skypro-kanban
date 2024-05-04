import Card from "../Card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card title="Web Design" color="orange" />
        <Card title="Research" color="green" />
        <Card title="Web Design" color="orange" />
        <Card title="Copywriting" color="purple" />
        <Card title="Web Design" color="orange" />
      </div>
    </div>
  );
};

export default Column;
