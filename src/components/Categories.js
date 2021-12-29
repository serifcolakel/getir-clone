import React from "react";
import { useSelector } from "react-redux";

export default function Categories(props) {
  const state = useSelector((state) => state);
  const categoriesItem = state.context.categories;
  let categoriesItems = [...categoriesItem];
  if (props.data) {
    categoriesItems.splice(3, 0, {
      id: "125125qwoe213",
      name: "Et, Tavuk & Balık",
      picURL:
        "https://cdn.getir.com/cat/5d01535e7730a800019b09cf_1619242974937_1619242975026.jpeg",
    });
  }

  return (
    <div className="md:pt-6 md:pb-6 max-w-screen-xl mx-auto flex flex-col p-2">
      <span className="text-sm font-semibold md:pb-1">Kategoriler</span>
      <div className="grid grid-cols-4 max-w-screen-xl md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {categoriesItems.map((x) => (
          <a href="/kategori" key={x.id}>
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
