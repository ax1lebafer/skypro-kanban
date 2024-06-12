import { useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "./PopBrowse.styled";

const PopBrowse = () => {
  const { id } = useParams();

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
                <S.StatusTheme $isHide={true} $theme={"gray"}>
                  <S.StatusThemeText>Без статуса</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={false} $theme={"gray"}>
                  <S.StatusThemeText $theme={"gray"}>
                    Нужно сделать
                  </S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={true}>
                  <S.StatusThemeText>В работе</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={true}>
                  <S.StatusThemeText>Тестирование</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $isHide={true}>
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
                    readOnly
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
            <S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonLink>
                  <S.ButtonEdit>Редактировать задачу</S.ButtonEdit>
                </S.ButtonLink>
                <S.ButtonLink>
                  <S.ButtonDelete>Удалить задачу</S.ButtonDelete>
                </S.ButtonLink>
              </S.ButtonGroup>
              <S.ButtonLinkClose to={appRoutes.HOME}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.ButtonLinkClose>
            </S.PopBrowseButtonBrowse>
            <S.PopBrowseButtonEdit $isHide={true}>
              <S.ButtonGroup>
                <S.ButtonLinkSave>
                  <S.ButtonSave>Сохранить</S.ButtonSave>
                </S.ButtonLinkSave>
                <S.ButtonLinkCancel>
                  <S.ButtonCancel>Отменить</S.ButtonCancel>
                </S.ButtonLinkCancel>
                <S.ButtonLink>
                  <S.ButtonDelete>Удалить задачу</S.ButtonDelete>
                </S.ButtonLink>
              </S.ButtonGroup>
              <S.ButtonLinkClose>
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
