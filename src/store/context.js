import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categories: [],
  favorites: [],
  basket: [],
  cards: [],
  sliderData: [],
  footerLink: [],
  message: "",
};
const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload.favorites;
    },
    setCards: (state, action) => {
      state.cards = action.payload.cards;
    },
    setSliderData: (state, action) => {
      state.sliderData = action.payload.sliderData;
    },
    setFooterLink: (state, action) => {
      state.footerLink = action.payload.footerLink;
    },
    setBasket: (state, action) => {
      state.basket = action.payload.id;
    },
    addToBasket: (state, action) => {
      let isAdded = state.basket.filter(
        (item) => item.id === action.payload.id
      );
      if (isAdded.length === 0) {
        let product = {
          ...state.favorites.find((item) => item.id === action.payload.id),
        };
        product.count++;
        state.basket = [...state.basket, product];
      } else {
        let newState = [
          ...state.basket.filter((item) => {
            if (item.id === action.payload.id) {
              item.count += 1;
              return item;
            }
            return item;
          }),
        ];

        state.basket = [...newState];
      }
    },
    deleteFromBasket: (state, action) => {
      let product = state.basket.find((item) => item.id === action.payload.id);
      if (product.count === 1) {
        state.basket = [
          ...state.basket.filter((item) => item.id !== action.payload.id),
        ];
      } else {
        let newState = [
          ...state.basket.filter((item) => {
            if (item.id === action.payload.id) {
              item.count -= 1;
              return item;
            }
            return item;
          }),
        ];

        state.basket = [...newState];
      }
    },
  },
});

export const contextReducer = contextSlice.reducer;
export const contextActions = contextSlice.actions;
