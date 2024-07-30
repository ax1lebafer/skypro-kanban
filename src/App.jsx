import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./styles/global.styled";

function App() {
  return (
    <BrowserRouter basename="/skypro-kanban/">
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
