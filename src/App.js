import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./Partials";
import { JudgeDashBoard, LawyerDashBoard } from "./Dashboard";
import React from "react";
import "./style.css";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/dashboard" exact element={<LawyerDashBoard/>} />
          <Route path="/auth" exact element={<JudgeDashBoard/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
