import { useEffect, useState } from "react";
import Column from "../Column/Column";
import * as S from "./Main.styled";
import { Container, Loader } from "../../styles/shared.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({ taskList }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading && <Loader />}
            {!isLoading &&
              statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  taskList={taskList.filter((card) => card.status === status)}
                />
              ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
