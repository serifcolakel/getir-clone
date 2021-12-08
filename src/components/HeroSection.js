import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";
import Slider from "react-slick";
import NormalizePhoneNumber from "./NormalizePhoneNumber";

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
    <div className="relative h:auto md:h-[500px]  before:bg-gradient-to-r before:from-primary-brand-color before:to-trasnparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {sliderWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              alt="noreferer"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              alt="noreferer"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              alt="noreferer"
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              alt="noreferer"
              src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            />
          </div>
        </Slider>
      )}
      <div className="container max-w-screen-xl flex justify-between items-center relative md:absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            alt="noreferer"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          />
          <h3 className="mt-4 text-4xl font-semibold text-white ">
            Dakikalar İçinde
            <br /> Kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-red-800 text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4 w-full">
            <div className="flex flex-col gap-x-2 w-full">
              <NormalizePhoneNumber />
              <hr className="h-[1px] bg-gray-300 my-2" />
              <button className="bg-blue-50  text-blue-700 px-4 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center  rounded-md w-full text-sm font-semibold">
                <FaFacebook size={24} className="m" />

                <span className="mx-auto ">
                  <a href="https://getir.com/" target="_blank" rel="noreferrer">
                    Facebook ile Devam Et
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
