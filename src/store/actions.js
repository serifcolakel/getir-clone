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
