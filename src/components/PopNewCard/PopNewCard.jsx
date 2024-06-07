import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { appRoutes } from "../../lib/appRoutes";

const PopNewCard = () => {
  const [selected, setSelected] = useState();

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
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
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
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
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
            <S.FormNewCreateButton id="btnCreate">
              Создать задачу
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
