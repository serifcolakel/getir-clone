import { FiPlus, FiMinus } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Favorites() {
  const [favsList, setFavsList] = useState([]);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (favori) => {
    if (!basket.includes(favori)) {
      setBasket([...basket, favori]);
      setTotalPrice(totalPrice + favori.price);
      favori.count++;
    } else {
      favori.count++;
      setTotalPrice(totalPrice + favori.price);
    }
  };
  const deleteFromBasket = (favori) => {
    if (!basket.includes(favori)) {
      setBasket(basket.filter((item) => item.id !== favori.id));
      setTotalPrice(totalPrice - favori.price);
      favori.count--;
    } else if (favori.count === 1) {
      setTotalPrice(totalPrice - favori.price);
      setBasket(basket.filter((item) => item.id !== favori.id));
    } else {
      favori.count--;
      setTotalPrice(totalPrice - favori.price);
    }
  };
  useEffect(() => {
    axios
      .get("https://getir-api-clone.herokuapp.com/api/favorite")
      .then((res) => setFavsList(res.data));
  }, []);
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
              <div
                onClick={() => addToBasket(items)}
                className="flex absolute w-9 h-9 top-5 right-5 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
              >
                <button>
                  <FiPlus />
                </button>
              </div>

              <a
                href="https://github.com/serifcolakel"
                target="_blank"
                rel="noreferrer"
              >
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
      <div className="container max-w-screen-xl mx-auto flex flex-col pt-8 ">
        <span className="text-sm font-semibold pb-1 pt-2">Sepetim</span>
        {basket.length <= 0 ? (
          <div className="flex flex-col justify-center items-center w-[500px] mx-auto border-2 p-4 rounded-lg border-red-500">
            <img
              alt="noreferer"
              className="w-30 h-[120px] cursor-pointer "
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            />
            <p className="p-4 text-primary-brand-color">Sepetiniz şu an boş</p>
            <p className="p-2 text-brand-gray">
              Sipariş vermek için sepetinize ürün ekleyin
            </p>
          </div>
        ) : (
          <div
            className={
              basket.length > 10
                ? "grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 grid-rows-2 border-2 border-sepet-border-renk rounded-lg"
                : "grid grid-cols-2 md:grid-cols-4 xl:grid:cols-10 grid-row-2 border-2 border-sepet-border-renk rounded-lg"
            }
          >
            {basket.map((items) => (
              <div
                key={items.id}
                className="relative flex flex-col bg-primary-white justify-center items-center border-b border-r border-opacity-30  md:p-3 w-full md:w-30"
              >
                <div className="flex flex-row gap-x-2 absolute top-5 right-5 justify-end">
                  <div
                    onClick={() => deleteFromBasket(items)}
                    className="flex  w-9 h-9 font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
                  >
                    <button>
                      <FiMinus />
                    </button>
                  </div>
                  <div className="flex w-9 h-9 justify-center items-center   text-primary-brand-color  rounded-lg border z-10 bg-primary-white cursor-pointer">
                    {items.count}
                  </div>
                  <div
                    onClick={() => addToBasket(items)}
                    className="flex  w-9 h-9  font-xl justify-center text-primary-brand-color items-center rounded-lg border z-10 bg-primary-white cursor-pointer"
                  >
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <a
                  href="https://github.com/serifcolakel"
                  target="_blank"
                  rel="noreferrer"
                >
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
        )}

        <div className="flex justify-center items-center mt-4 text-xl">
          <p className=" text-primary-brand-color font-semibold">
            Total Price :
            {totalPrice.toFixed(2) < 0
              ? " ₺  " + 0
              : " ₺  " + totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
