import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import Campaings from "../components/Campaings";
import Favorites from "components/Favorites";
import MobileApp from "../components/MobileApp";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import Loading from "components/Loading";

export default function Main() {
  const state = useSelector((state) => state);
  const cards = state.context.cards;
  const getir = cards.getir;

  const sliderWidth = useWindowWidth();

  if (!getir) {
    return <Loading />;
  }
  return (
    <div>
      {sliderWidth <= 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {sliderWidth > 768 && <Campaings />}
      <Favorites />
      <MobileApp />
      <Cards data={getir} />
    </div>
  );
}
