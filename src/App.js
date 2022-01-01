import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCards,
  getCategories,
  getFavorites,
  getSliderData,
  getFooterLink,
  getCampaings,
  getNewItem,
  getIndirim,
  getSuIcecek,
  getMeyveSebze,
  getFirindan,
  getTemelGida,
  getAtistirmalik,
  getDondurma,
  getYiyecek,
  getSutUrunleri,
  getFitForm,
  getKisiselBakim,
  getEvBakim,
  getEvYasam,
  getTeknoloji,
  getEvcilHayvan,
  getBebek,
  getCinselSaglik,
} from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import GetirBuyuk from "./pages/GetirBuyuk";
import GetirYemek from "./pages/GetirYemek";
import GetirSu from "./pages/GetirSu";
import Getir from "./pages/Getir";
import GetirKategori from "pages/GetirKategori";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinselSaglik());
    dispatch(getBebek());
    dispatch(getEvcilHayvan());
    dispatch(getTeknoloji());
    dispatch(getEvYasam());
    dispatch(getEvBakim());
    dispatch(getKisiselBakim());
    dispatch(getFitForm());
    dispatch(getSutUrunleri());
    dispatch(getDondurma());
    dispatch(getYiyecek());
    dispatch(getAtistirmalik());
    dispatch(getTemelGida());
    dispatch(getFirindan());
    dispatch(getMeyveSebze());
    dispatch(getSuIcecek());
    dispatch(getIndirim());
    dispatch(getNewItem());
    dispatch(getCampaings());
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
        <Route path="/kategori" element={<GetirKategori />} />
        <Route path="/su" element={<GetirSu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default connect()(App);
