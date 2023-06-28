import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";
import Question from "./pages/Question";
import React from "react";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result/:myMbti" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
