import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./contexts/UserContext.jsx";
import TasksProvider from "./contexts/TasksContext.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <TasksProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TasksProvider>
    </UserProvider>
  </React.StrictMode>
);
