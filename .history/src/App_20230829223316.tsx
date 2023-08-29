import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
import { NewsProvider } from "./context/news/context";
import { SportProvider } from ".//context/sport/context";
import { TeamProvider } from "./context/teams/context";
import { ThemeContext } from "./context/theme";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full mx-auto ${theme === "dark" ? "dark" : ""}`}
    >
      <MatchesProvider>
        <NewsProvider>
          <SportProvider>
            <TeamProvider>
              <RouterProvider router={router} />
            </TeamProvider>
          </SportProvider>
        </NewsProvider>
      </MatchesProvider>
      <ToastContainer />

    </div>
  );
}

export default App;
