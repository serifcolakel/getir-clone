import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import Campaings from "../components/Campaings";
import Favorites from "components/Favorites";
import MobileApp from "../components/MobileApp";
import Cards from "../components/Cards";

export default function Main() {
  const sliderWidth = useWindowWidth();
  return (
    <div>
      {sliderWidth <= 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {sliderWidth > 768 && <Campaings />}
      <Favorites />
      <MobileApp />
      <Cards />
    </div>
  );
}
