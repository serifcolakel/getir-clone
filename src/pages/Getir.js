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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  if (!getir) {
    return <Loading />;
  }
  return (
    <div>
      {sliderWidth <= 768 && (
        <Campaings settings={settings} name="getirCampaings" title={true} />
      )}
      <HeroSection />
      <Categories />
      {sliderWidth > 768 && (
        <Campaings settings={settings} name="getirCampaings" title={true} />
      )}
      <Favorites />
      <MobileApp />
      <Cards data={getir} />
    </div>
  );
}
