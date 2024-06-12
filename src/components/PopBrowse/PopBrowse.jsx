import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "./PopBrowse.styled";
import { useUser } from "../../hooks/useUser";
import { deleteTask, editTask } from "../../lib/api";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";

const PopBrowse = () => {
  const { id } = useParams();
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isHide, setIsHide] = useState(true);

  const changeHideComponents = () => {
    setIsHide((prevState) => !prevState);
  };

  const handleDeleteTask = async () => {
    try {
      const response = await deleteTask({
        id: id,
        token: userData.token,
      });

      console.log("DELETE RESPONSE", response);

      setError(null);
      setTasks(response.tasks);
      navigate(appRoutes.HOME);
    } catch (error) {
      setError("Ошибка удаления задачи");
    }
  };

  const handleEditTask = async () => {
    try {
      const response = await editTask({});
    } catch (error) {
      setError("Ошибка редактирования задачи");
    }
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>Название задачи {id}</S.PopBrowseTitle>
              <S.CategoriesTheme $isActive={true} $theme={"orange"}>
                <S.CategoriesThemeText $theme={"orange"}>
                  Web Design
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <S.StatusText>Статус</S.StatusText>
              <S.StatusThemes>
                <S.StatusTheme $isHide={isHide}>
                  <S.StatusThemeText>Без статуса</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={false} $theme={"gray"}>
                  <S.StatusThemeText $theme={"gray"}>
                    Нужно сделать
                  </S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={isHide}>
                  <S.StatusThemeText>В работе</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={isHide}>
                  <S.StatusThemeText>Тестирование</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={isHide}>
                  <S.StatusThemeText>Готово</S.StatusThemeText>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.LabelSubtitle htmlFor="textArea01">
                    Описание задачи
                  </S.LabelSubtitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={isHide}
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrowseWrap>
            <S.ThemeDownDown>
              <S.CategoriesText>Категория</S.CategoriesText>
              <S.CategoriesTheme $isActive={true} $theme={"orange"}>
                <S.CategoriesThemeText $theme={"orange"}>
                  Web Design
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.ThemeDownDown>
            <S.PopBrowseButtonBrowse $isHide={!isHide}>
              <S.ButtonGroup>
                <S.ButtonLink>
                  <S.ButtonEdit onClick={changeHideComponents}>
                    Редактировать задачу
                  </S.ButtonEdit>
                </S.ButtonLink>
                <S.ButtonLink>
                  <S.ButtonDelete onClick={handleDeleteTask}>
                    Удалить задачу
                  </S.ButtonDelete>
                </S.ButtonLink>
                {!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              </S.ButtonGroup>
              <S.ButtonLinkClose to={appRoutes.HOME}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.ButtonLinkClose>
            </S.PopBrowseButtonBrowse>
            <S.PopBrowseButtonEdit $isHide={isHide}>
              <S.ButtonGroup>
                <S.ButtonLinkSave>
                  <S.ButtonSave>Сохранить</S.ButtonSave>
                </S.ButtonLinkSave>
                <S.ButtonLinkCancel>
                  <S.ButtonCancel onClick={changeHideComponents}>
                    Отменить
                  </S.ButtonCancel>
                </S.ButtonLinkCancel>
                <S.ButtonLink>
                  <S.ButtonDelete onClick={handleDeleteTask}>
                    Удалить задачу
                  </S.ButtonDelete>
                </S.ButtonLink>
              </S.ButtonGroup>
              <S.ButtonLinkClose to={appRoutes.HOME}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.ButtonLinkClose>
            </S.PopBrowseButtonEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
