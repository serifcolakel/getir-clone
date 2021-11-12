import Campaings from "components/Campaings";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "./components/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories, getFavorites } from "./store/actions";

export const FavoritesItem = React.createContext();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getFavorites());
  }, []);
  const sliderWidth = useWindowWidth();

  return (
    <>
      <Header />
      {sliderWidth <= 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {sliderWidth > 768 && <Campaings />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default connect()(App);
