import { Wrapper } from "../../styles/shared.styled";
import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";

const MainPage = ({ userData }) => {

  return (
    <Wrapper>
      <Outlet />
      <Home userData={userData}/>
    </Wrapper>
  );
};

export default MainPage;
