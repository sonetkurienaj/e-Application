import React from "react";
import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SignUp />
    </div>
  );
};

export default App;
