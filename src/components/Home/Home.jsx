import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import { Wrapper } from "../../styles/shared.styled";
import Header from "../../components/Header/Header";
import { getTasks } from "../../lib/api";
import * as S from "./Home.styled";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

const Home = () => {
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const [getTasksError, setGetTasksError] = useState(null);
  const [isLoadingGetTasks, setLoadingGetTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingGetTasks(true);
        const newTasks = await getTasks({ token: userData.token });
        setTasks(newTasks.tasks);
      } catch (error) {
        setGetTasksError(error.message);
      } finally {
        setLoadingGetTasks(false);
      }
    };

    fetchTasks();
  }, [setTasks, userData.token]);

  return (
    <Wrapper>
      <Header />
      {!getTasksError && <Main isLoading={isLoadingGetTasks} />}
      {getTasksError && <S.ErrorMessage>{getTasksError}</S.ErrorMessage>}
    </Wrapper>
  );
};

export default Home;
