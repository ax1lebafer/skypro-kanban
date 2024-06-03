import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import { Wrapper } from "../../styles/shared.styled";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../lib/api";
import * as S from "./MainPage.styled";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [getTasksError, setGetTasksError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const newTasks = await getTasks();
        console.log(newTasks.tasks);
        setTasks(newTasks.tasks);
      } catch (error) {
        setGetTasksError(error.message);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Wrapper>
      <PopNewCard />

      <Outlet />
      <Header setTasks={setTasks} tasks={tasks} />
      {!getTasksError && <Main taskList={tasks} />}
      {getTasksError && <S.ErrorMessage>{getTasksError}</S.ErrorMessage>}
    </Wrapper>
  );
};

export default MainPage;
