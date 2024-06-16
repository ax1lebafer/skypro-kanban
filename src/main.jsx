import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext.jsx";
import TasksProvider from "./contexts/TasksContext.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TasksProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
