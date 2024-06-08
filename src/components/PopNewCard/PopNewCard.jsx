import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";
import { addTask } from "../../lib/api";
import { useNavigate } from "react-router-dom";

const PopNewCard = () => {
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const [error, setError] = useState(null);

  const createTask = async (event) => {
    event.preventDefault();

    if (!task.title || !task.description || !task.date) {
      setError("Заполните все поля!");
      return;
    }

    try {
      const response = await addTask({
        token: userData.token,
        title: task.title,
        topic: task.topic,
        description: task.description,
        status: task.status,
        date: task.date,
      });

      console.log("ADD TASK RESPONSE", response.user);

      setTasks(response.task);
      navigate(appRoutes.HOME);
    } catch (error) {
      console.log(error.message);
      setError("Что-то пошло не так. Попробуйте еще раз!");
    }
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose to={appRoutes.HOME}>&#10006;</S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.LabelSubtitle htmlFor="formTitle">
                    Название задачи
                  </S.LabelSubtitle>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.LabelSubtitle htmlFor="textArea">
                    Описание задачи
                  </S.LabelSubtitle>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selected={task.date}
                setSelected={(date) => setTask({ ...task, date })}
              />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesText>Категория</S.CategoriesText>
              <S.CategoriesThemes>
                <S.CategoriesTheme theme={"orange"} isActive={true}>
                  <S.CategoriesThemeText theme={"orange"}>
                    Web Design
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme theme={"green"}>
                  <S.CategoriesThemeText theme={"green"}>
                    Research
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme theme={"purple"}>
                  <S.CategoriesThemeText theme={"purple"}>
                    Copywriting
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.FormNewCreateButton id="btnCreate" onClick={createTask}>
              Создать задачу
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
