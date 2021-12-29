import axios from "axios";
import { contextActions } from "./context";

export const getCategories = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/categories"
    );
    dispatch(contextActions.setCategories({ categories: data.data }));
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/favorite"
    );
    dispatch(contextActions.setFavorites({ favorites: data.data }));
  };
};

export const getCards = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/cards"
    );
    dispatch(contextActions.setCards({ cards: data.data }));
  };
};

export const getSliderData = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/sliderData"
    );
    dispatch(contextActions.setSliderData({ sliderData: data.data }));
  };
};

export const getFooterLink = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-api-clone.herokuapp.com/api/footerLink"
    );
    dispatch(contextActions.setFooterLink({ footerLink: data.data }));
  };
};
