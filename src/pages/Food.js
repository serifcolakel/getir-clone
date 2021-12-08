import React from "react";
import Cards from "../components/Cards";
import { useWindowWidth } from "@react-hook/window-size";
import { FaSearch } from "react-icons/fa";
import { BiCrosshair } from "react-icons/bi";
import NormalizePhoneNumber from "../components/NormalizePhoneNumber";
import SliderMultiple from "../components/Slider";
import data from "../components/datas/videoData.json";
import dataFood from "../components/datas/yemekData.json";

export default function Food() {
  const sliderWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  const settingsOther = {
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 2,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col bg-gray-background gap-y-10 mx-auto ">
      <div className=" h:auto md:h-[500px] w-full  before:z-10 z-10 md:pb-8">
        {sliderWidth >= 768 && (
          <SliderMultiple
            settings={settings}
            data={data}
            className="w-full h-[500px] object-cover"
            video={true}
          />
        )}
        <div className="md:w-[400px] md:h-[362px] w-full flex flex-col mx-auto justify-center items-center gap-y-4 md:absolute md:right-28 md:top-28 md:-translate-x-1/2   md:z-20 bg-white md:rounded-xl ">
          <span className="text-brand-color font-semibold text-base pt-4 md:p-0">
            Adresine getiren restoranları gör
          </span>
          <div className="w-4/5 h-14 border-2 flex items-center justify-center gap-x-4 text-sm cursor-pointer">
            <FaSearch className="text-primary-brand-color" />
            <p>Örn. Etiler Mah.</p>
            <div className="flex flex-row items-center gap-x-2 text-primary-brand-color font-semibold rounded-lg bg-primary-brand-color-lights p-2 md:pt-3 md:pb-3 md:pl-2 md:pr-2">
              <BiCrosshair className="w-[20px] h-[20px]" />
              <p className="text-xs"> Konumumu Bul</p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-x-4 items-center">
            <div className="border-b-2 border-gray-100 mt-5 w-1/2" />
            <p className="mt-4 text-gray-400">veya</p>
            <div className="border-b-2 border-gray-100 mt-5 w-1/2" />
          </div>
          <span className="text-brand-color font-semibold text-base">
            Giriş yap veya kayıt ol
          </span>
          <div className="flex flex-row gap-x-2 w-4/5">
            <NormalizePhoneNumber />
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl w-full mx-auto flex items-center justify-center">
        <SliderMultiple
          settings={settingsOther}
          data={dataFood}
          video={false}
          className="w-[120px] h-[75px] object-cover rounded-xl pl-2 pr-2 mb-3"
        />
      </div>
      <div className="flex md:flex-row gap-y-4 gap-x-8 pl-8 flex-col p-4 justify-start items-start max-w-screen-xl md:items-center md:justify-between h-[180px]  mx-auto md:rounded-xl bg-partner-food">
        <img
          alt="partner-food"
          className="hidden md:flex w-[216px] h-[112px]"
          src="https://getir.com/_next/static/images/partners-main-9aacd2252ceac357cf7d7b48daec30e1.jpg"
        />
        <div className="flex flex-col gap-y-4 ">
          <span className="text-brand-color font-bold text-2xl">
            Restoran sahibi misiniz?
          </span>
          <span className="text-gray-400 font-semibold">
            GetirYemek restoran iş ortaklarından biri olun, işinizi daha az
            maliyetle büyütün, müşteri memnuniyetini artırın.
          </span>
        </div>

        <button className="md:pt-2 md:pb-2 pt-4 pb-4 rounded-lg pl-8 pr-8 text-xs bg-primary-button font-semibold text-primary-brand-color hover:text-primary-button hover:bg-primary-brand-color">
          Hemen Başvur
        </button>
      </div>
      <Cards />
    </div>
  );
}
