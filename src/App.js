import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticleList from "./Components/ArticleList";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ArticleList />
    </div>
  );
}

export default App;
