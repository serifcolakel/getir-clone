import { useWindowWidth } from "@react-hook/window-size";
import { useEffect } from "react";
import SliderMultiple from "../components/Slider";
import NormalizePhoneNumber from "../components/NormalizePhoneNumber";
import Categories from "../components/Categories";
import Campaings from "components/Campaings";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import { useSelector } from "react-redux";
import Loading from "components/Loading";

export default function HeroSection() {
  const state = useSelector((state) => state);
  const cards = state.context.cards;
  const getirBuyuk = cards.getirBuyuk;
  const sliderWidth = useWindowWidth();
  const sliderData = state.context.sliderData;
  const buyukData = sliderData.buyukData;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const settingsCampaings = {
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

  useEffect(() => {
    document.title = "GetirBüyük - Binlerce Ürün Market Fiyatına";
  }, []);
  if (!getirBuyuk || !buyukData) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative h:auto md:h-[500px]  before:bg-gradient-to-r before:from-primary-brand-color before:to-trasnparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {sliderWidth >= 768 && (
          <SliderMultiple
            settings={settings}
            data={buyukData}
            className="w-full h-[500px] object-cover"
          />
        )}

        <div className="container max-w-screen-xl flex justify-between items-center relative md:absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div className="hidden md:block w-[350px] h-[190px]">
            <img
              className="w-[315px] object-cover"
              alt="noreferer"
              src="https://getir.com/_next/static/images/getir-more-logo-43b84c4381edcbda2c1d686d826034de.svg"
            />
            <h3 className="mt-8 text-4xl font-semibold text-white ">
              Market Fiyatına
              <br /> kapınızda
            </h3>
          </div>
          <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">
              Giriş yap veya kayıt ol
            </h4>
            <div className="grid gap-y-4 w-full">
              <div className="flex flex-col gap-x-2 w-full">
                <NormalizePhoneNumber />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories data="new data" />
      <Campaings
        settings={settingsCampaings}
        name="getirCampaings"
        title={true}
      />
      <Favorites />
      <MobileApp />
      <Cards data={getirBuyuk} />
    </>
  );
}
