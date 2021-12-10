import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function SliderMultiple(props) {
  const [datas] = useState(props.data);
  useEffect(() => {
    console.log("Slider verisi degisti");
  }, [datas]);

  function sliders() {
    return datas.map((data, index) => {
      return (
        <div key={index}>
          {props.video ? (
            <video
              className={props.className}
              src={data.imageURL}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              className={props.className}
              alt="noreferer"
              src={data.imageURL}
            />
          )}
          <p className="pl-2 pr-2 text-base truncate text-gray-500 font-semibold">
            {data.name}
          </p>
        </div>
      );
    });
  }

  return (
    <Slider className="w-full" {...props.settings}>
      {sliders()}
    </Slider>
  );
}
