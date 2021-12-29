import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCards,
  getCategories,
  getFavorites,
  getSliderData,
  getFooterLink,
} from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import GetirBuyuk from "./pages/GetirBuyuk";
import GetirYemek from "./pages/GetirYemek";
import GetirSu from "./pages/GetirSu";
import Getir from "./pages/Getir";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooterLink());
    dispatch(getSliderData());
    dispatch(getCards());
    dispatch(getCategories());
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/buyuk" element={<GetirBuyuk />} />
        <Route path="/yemek" element={<GetirYemek />} />
        <Route path="/su" element={<GetirSu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default connect()(App);
