import React from "react";
import { FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { contextActions } from "store/context";

export default function Favorites({ data }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const favsList = state.context.favorites;

  return (
    <div className="bg-gray-background">
      <div className="container max-w-screen-xl mx-auto flex flex-col">
        <span className="text-sm font-semibold pb-1">Favoriler</span>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-rows-2">
          {(data ? data : favsList).map((items, index) => (
            <div
              key={`#${items.name}+${index}`}
              className="relative flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
            >
              <div
                onClick={() => {
                  dispatch(contextActions.addToBasket({ id: items.id }));
                }}
                className="flex absolute w-9 h-9 top-5 right-5 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
              >
                <button>
                  <FiPlus />
                </button>
              </div>

              <img
                alt="noreferer"
                className="w-30 h-[120px] cursor-pointer "
                src={items.squareThumbnailURL}
              />

              <div className="flex flex-col items-center bg-primary-white w-full md:w-[120px]">
                <p className="text-sm text-primary-brand-color font-semibold">
                  {"₺" + items.price}
                </p>
                <p className="text-sm  text-center font-semibold">
                  {items.name}
                </p>
                <p className="text-sm text-brand-gray text-center font-semibold">
                  {items.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
