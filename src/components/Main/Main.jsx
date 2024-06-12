import Column from "../Column/Column";
import * as S from "./Main.styled";
import { Container, Loader } from "../../styles/shared.styled";
import { useTasks } from "../../hooks/useTasks";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({ isLoading }) => {
  const { tasks } = useTasks();

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
                  taskList={tasks.filter((card) => card.status === status)}
                />
              ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
