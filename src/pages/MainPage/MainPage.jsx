import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import { Wrapper } from "../../styles/shared.styled";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../lib/api";
import * as S from "./MainPage.styled";

const MainPage = ({ userData }) => {
  const [tasks, setTasks] = useState([]);
  const [getTasksError, setGetTasksError] = useState(null);
  const [isLoadingGetTasks, setLoadingGetTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingGetTasks(true);
        const newTasks = await getTasks({token: userData.token});
        setTasks(newTasks.tasks);
      } catch (error) {
        setGetTasksError(error.message);
      } finally {
        setLoadingGetTasks(false);
      }
    };

    fetchTasks();
  }, [userData.token]);

  return (
    <Wrapper>
      <PopNewCard />

      <Outlet />
      <Header setTasks={setTasks} tasks={tasks} />
      {!getTasksError && (
        <Main taskList={tasks} isLoading={isLoadingGetTasks} />
      )}
      {getTasksError && <S.ErrorMessage>{getTasksError}</S.ErrorMessage>}
    </Wrapper>
  );
};

export default MainPage;
