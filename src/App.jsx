/* Hooks */
import { useState } from "react";
/* Components */
import Header from "./components/Header.jsx";
/* Style */
import "./App.css";

function App() {
  /* Dark Mode State*/
  const [darkMode, setDarkMode] = useState(false);

  /* Dark Mode Handler*/
  function darkModeHandler() {
    setDarkMode((darkMode) => !darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <>
      {/* Header */}
      <Header darkModeHandler={darkModeHandler} darkMode={darkMode} />
    </>
  );
}

export default App;
