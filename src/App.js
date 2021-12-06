import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories, getFavorites } from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import Buyuk from "components/Buyuk";
import Food from "components/Food";
import Water from "components/Water";
import Main from "./components/Main";

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
        <Route path="/buyuk" element={<Buyuk />} />
        <Route path="/yemek" element={<Food />} />
        <Route path="/su" element={<Water />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default connect()(App);
