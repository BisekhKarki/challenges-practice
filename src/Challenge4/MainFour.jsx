import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import HomeFour from "./components/Home";
import Header from "./components/Header";

function MainFour() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/homeFour" element={<HomeFour />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}


export default MainFour;
