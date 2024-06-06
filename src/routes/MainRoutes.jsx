import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
        <Route path="/category/:itemId" element={<ItemDetailsContainer />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
