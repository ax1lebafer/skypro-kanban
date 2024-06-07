import { Wrapper } from "../../styles/shared.styled";
import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";

const MainPage = () => {
  return (
    <Wrapper>
      <Outlet />
      <Home />
    </Wrapper>
  );
};

export default MainPage;
