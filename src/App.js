import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories, getFavorites } from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import GetirBuyuk from "./pages/Buyuk";
import GetirYemek from "./pages/Food";
import GetirSu from "./pages/Water";
import Main from "./pages/Main";

export const FavoritesItem = React.createContext();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buyuk" element={<GetirBuyuk />} />
        <Route path="/yemek" element={<GetirYemek />} />
        <Route path="/su" element={<GetirSu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default connect()(App);
