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
  const [isLoading, setIsLoading] = useState(false);

  const [activeTheme, setActiveTheme] = useState("Research");

  const handleThemeClick = (theme, topic) => {
    setActiveTheme(theme);
    setTask({ ...task, topic: topic });
  };

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

    setIsLoading(true);

    try {
      const response = await addTask({
        token: userData.token,
        title: task.title,
        topic: task.topic,
        description: task.description,
        status: task.status,
        date: task.date,
      });

      setTasks(response.tasks);
      navigate(appRoutes.HOME);
    } catch (error) {
      console.log(error.message);
      setError("Что-то пошло не так. Попробуйте еще раз!");
    } finally {
      setIsLoading(false);
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
                <S.CategoriesTheme
                  $theme={"orange"}
                  $isActive={activeTheme === "orange"}
                  onClick={() => handleThemeClick("orange", "Web Design")}
                >
                  <S.CategoriesThemeText $theme={"orange"}>
                    Web Design
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  $theme={"green"}
                  $isActive={activeTheme === "green"}
                  onClick={() => handleThemeClick("green", "Research")}
                >
                  <S.CategoriesThemeText $theme={"green"}>
                    Research
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  $theme={"purple"}
                  $isActive={activeTheme === "purple"}
                  onClick={() => handleThemeClick("purple", "Copywriting")}
                >
                  <S.CategoriesThemeText $theme={"purple"}>
                    Copywriting
                  </S.CategoriesThemeText>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {!isLoading && (
              <S.FormNewCreateButton onClick={createTask}>
                Создать задачу
              </S.FormNewCreateButton>
            )}
            {isLoading && (
              <S.FormNewCreateButton disabled>
                Создание задачи...
              </S.FormNewCreateButton>
            )}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
