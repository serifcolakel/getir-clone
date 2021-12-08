import React, { Component } from "react";
import Slider from "react-slick";
import data from "../components/yemekData.json";

export default class SliderOther extends Component {
  render() {
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
      slidesToShow: 8,
      slidesToScroll: 2,
      cssEase: "linear",
    };
    return (
      <div className="flex justify-center p-10 bg-white">
        <Slider className="md:max-w-screen-xl w-full" {...settingsOther}>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[0].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[1].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[2].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[3].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[4].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[5].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[6].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[7].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[8].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[9].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[10].imageURL}
            />
          </div>
          <div>
            <img
              className="w-[120px] h-[75px] object-cover rounded-2xl pl-2 pr-2"
              alt="noreferer"
              src={data[11].imageURL}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
