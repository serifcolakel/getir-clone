import React, { useContext } from "react";
import { FavoritesItem } from "../App";

export default function Categories() {
  const cat = useContext(FavoritesItem);
  const { categoriesItems } = cat;

  return (
    <div className="md:pt-6 md:pb-6 max-w-screen-xl mx-auto flex flex-col p-2">
      <span className="text-sm font-semibold md:pb-1">Kategoriler</span>
      <div className="grid grid-cols-4 max-w-screen-xl md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {categoriesItems.map((x) => (
          <a href="https://getir.com/" key={x.id}>
            <div className="flex flex-col gap-y-2 hover:text-primary-brand-color hover:bg-primary-brand-color-lights cursor-pointer md:p-4 justify-between items-center container w-full md:w-27 h-auto md:h-[108px] ">
              <img
                alt="noreferer"
                className=" w-12 h-12 rounded-lg border-2"
                src={x.picURL}
              />
              <p className="truncate text-[10px] md:text-sm  text-opacity-0 font-semibold">
                {x.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
