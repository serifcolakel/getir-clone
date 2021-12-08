import React, { useState } from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";
import ReactFlagsSelect from "react-flags-select";
import { FaSearch } from "react-icons/fa";
import { BiCrosshair } from "react-icons/bi";
import SliderOther from "./Slider";
const normalizedPhoneNumber = (value) => {
  let left =
    value
      .replace(/\s/g, "")
      .match(/.{1,3}/g)
      ?.join(" ")
      .substr(0, 7) || "";
  let right =
    value
      .replace(/\s/g, "")
      .match(/.{1,2}/g)
      ?.join(" ")
      .substr(8, 12) || "";
  return left + right;
};

export default function Food() {
  const sliderWidth = useWindowWidth();
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    TR: "+90",
    DE: "+50",
    IT: "+1",
  };
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

  return (
    <div className=" bg-gray-background gap-y-8 mx-auto ">
      <div className=" h:auto md:h-[500px] w-full  before:z-10 z-10 ">
        {sliderWidth >= 768 && (
          <Slider {...settings}>
            <div>
              <video
                className="w-full h-[500px] object-cover"
                src="https://getir.com/videos/1-hamburger.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <video
                className="w-full h-[500px] object-cover"
                src="https://getir.com/videos/2-doner.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <video
                className="w-full h-[500px] object-cover"
                src="https://getir.com/videos/3-pide.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <video
                className="w-full h-[500px] object-cover"
                src="https://getir.com/videos/4-pizza.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <video
                className="w-full h-[500px] object-cover"
                src="https://getir.com/videos/5-kunefe.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Slider>
        )}
        <div className="md:w-[400px] md:h-[362px] w-full max-w-screen-xl flex flex-col mx-auto justify-center items-center gap-y-4 md:absolute md:right-0 md:top-16 md:-translate-x-1/2   md:z-50 bg-white md:rounded-xl ">
          <span className="text-brand-color font-semibold text-base">
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
            <ReactFlagsSelect
              className="flag-select"
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              selectedSize={12}
              optionsSize={12}
            />
            <label
              htmlFor="phone"
              className="flex group w-full relative cursor-pointer "
            >
              <input
                inputMode="numeric"
                type="tel"
                maxLength="13"
                autoComplete="cc-number"
                name="phone"
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = normalizedPhoneNumber(value);
                }}
                id="phone"
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-4/5 text-sm font-semibold text-primary-brand-color">
            <a href="https://getir.com/" target="_blank" rel="noreferrer">
              Telefon ile Devam Et
            </a>
          </button>
        </div>
      </div>
      <SliderOther />
      <div className="flex md:flex-row gap-y-4 pl-8 flex-col justify-start items-start max-w-screen-xl md:items-center md:justify-between h-[180px]  mx-auto md:rounded-xl bg-partner-food">
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
