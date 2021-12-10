import { useWindowWidth } from "@react-hook/window-size";
import data from "../components/datas/buyukData.json";
import SliderMultiple from "./../components/Slider";
import NormalizePhoneNumber from "./../components/NormalizePhoneNumber";
import Categories from "./../components/Categories";
import Campaings from "components/Campaings";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";

export default function HeroSection() {
  const sliderWidth = useWindowWidth();

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

  return (
    <>
      <div className="relative h:auto md:h-[500px]  before:bg-gradient-to-r before:from-primary-brand-color before:to-trasnparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {sliderWidth >= 768 && (
          <SliderMultiple
            settings={settings}
            data={data}
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
            <h4 className="text-red-800 text-center font-semibold mb-4">
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
      <Categories />
      <Campaings />
      <Favorites />
      <MobileApp />
      <Cards />
    </>
  );
}
