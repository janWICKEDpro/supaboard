import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import GetStared from "./pages/GetStarted";
import WhiteBoard from "./pages/whiteBoard";
import { GlobalProvider } from "./context/global";

function App() {
  return (
    <GetStared />
    // </GlobalProvider>
  );
}

export default App;
