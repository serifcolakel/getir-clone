import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "../components/yemekData.json";

export default function SliderOther() {
  const [datas, setDatas] = useState(data);
  useEffect(() => {
    setDatas(data);
  }, [datas]);

  const settingsOther = {
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
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

  function sliders() {
    return datas.map((data, index) => {
      return (
        <div key={index}>
          <img
            className="w-[120px] h-[75px] object-cover rounded-xl pl-2 pr-2 mb-3"
            alt="noreferer"
            src={data.imageURL}
          />
          <p className="pl-2 pr-2 text-base truncate text-gray-500 font-semibold">
            {data.name}
          </p>
        </div>
      );
    });
  }

  return (
    <div className="flex justify-center p-10 bg-white">
      <Slider className="md:max-w-screen-xl w-full" {...settingsOther}>
        {sliders()}
      </Slider>
    </div>
  );
}
