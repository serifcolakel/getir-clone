import { FiPlus } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Favorites() {
  const [favsList, setFavsList] = useState([]);
  useEffect(() => {
    axios
      .get("https://getir-api-clone.herokuapp.com/api/favorite")
      .then((res) => setFavsList(res.data));
  }, [favsList]);
  return (
    <div className="bg-gray-background">
      <div className="container max-w-screen-xl mx-auto flex flex-col">
        <span className="text-sm font-semibold pb-1">Favoriler</span>
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 grid-rows-2">
          {favsList.map((items) => (
            <div
              key={items.id}
              className="relative flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
            >
              <div className="flex absolute w-9 h-9 top-5 right-5 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white">
                <a href="https://getir.com/">
                  <FiPlus />
                </a>
              </div>
              <a href="https://getir.com/" target="_blank" rel="noreferrer">
                <img
                  alt="noreferer"
                  className="w-30 h-[120px] cursor-pointer "
                  src={items.url}
                />
              </a>
              <div className="flex flex-col items-center bg-primary-white w-full md:w-[120px]">
                <p className="text-sm text-primary-brand-color font-semibold">
                  {"₺" + items.price}
                </p>
                <p className="text-sm  text-center font-semibold">
                  {items.name}
                </p>
                <p className="text-sm text-brand-gray text-center font-semibold">
                  {items.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
