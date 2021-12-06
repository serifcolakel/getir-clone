import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Campaings from "./Campaings";
import Favorites from "components/Favorites";
import MobileApp from "./MobileApp";
import Cards from "./Cards";

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
