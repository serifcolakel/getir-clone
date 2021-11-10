import Campaings from "components/Campaings";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "./components/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const FavoritesItem = React.createContext();

function App() {
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

  let getCategories = async () => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/categories"
    );
    setCatList([...data.data]);
  };
  let getFavList = async () => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/favorite"
    );
    setFavsList([...data.data]);
  };
  const sliderWidth = useWindowWidth();
  const [favsList, setFavsList] = useState([]);
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    getFavList();
    getCategories();
  }, []);
  return (
    <FavoritesItem.Provider
      value={{
        favsList,
        categoriesItems: catList,
        deleteFromBasket,
        addToBasket,
        totalPrice,
        basket,
      }}
    >
      <Header />
      {sliderWidth <= 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {sliderWidth > 768 && <Campaings />}
      <Favorites />
      <MobileApp />
      <Cards />
      ""
      <Footer />
    </FavoritesItem.Provider>
  );
}

export default App;
