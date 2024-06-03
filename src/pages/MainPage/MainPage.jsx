import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import { Wrapper } from "../../styles/shared.styled";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../lib/api";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const newTasks = await getTasks();
      console.log(newTasks.tasks);
      setTasks(newTasks.tasks);
    };

    fetchTasks();
  }, []);

  return (
    <Wrapper>
      <PopNewCard />

      <Outlet />
      <Header setTasks={setTasks} tasks={tasks} />
      <Main taskList={tasks} />
    </Wrapper>
  );
};

export default MainPage;
