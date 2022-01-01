import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categories: [],
  favorites: [],
  basket: [],
  cards: [],
  sliderData: [],
  campaings: [],
  footerLink: [],
  newItem: [],
  indirim: [],
  suIcecek: [],
  Firindan: [],
  MeyveSebze: [],
  temelGida: [],
  atistirmalik: [],
  dondurma: [],
  yiyecek: [],
  sutUrunleri: [],
  fitForm: [],
  kisiselBakim: [],
  evBakim: [],
  evYasam: [],
  teknoloji: [],
  evcilHayvan: [],
  bebek: [],
  cinselSaglik: [],
  isLoading: false,
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
    setCampaings: (state, action) => {
      state.campaings = action.payload.campaings;
    },
    setNewItem: (state, action) => {
      state.newItem = action.payload.newItem;
    },
    setIndirim: (state, action) => {
      state.indirim = action.payload.indirim;
    },
    setSuIcecek: (state, action) => {
      state.suIcecek = action.payload.suIcecek;
    },
    setMeyveSebze: (state, action) => {
      state.MeyveSebze = action.payload.MeyveSebze;
    },
    setFirindan: (state, action) => {
      state.Firindan = action.payload.Firindan;
    },
    setTemelGida: (state, action) => {
      state.temelGida = action.payload.temelGida;
    },
    setAtistirmalik: (state, action) => {
      state.atistirmalik = action.payload.atistirmalik;
    },
    setDondurma: (state, action) => {
      state.dondurma = action.payload.dondurma;
    },
    setYiyecek: (state, action) => {
      state.yiyecek = action.payload.yiyecek;
    },
    setSutUrunleri: (state, action) => {
      state.sutUrunleri = action.payload.sutUrunleri;
    },
    setFitForm: (state, action) => {
      state.fitForm = action.payload.fitForm;
    },
    setKisiselBakim: (state, action) => {
      state.kisiselBakim = action.payload.kisiselBakim;
    },
    setEvBakim: (state, action) => {
      state.evBakim = action.payload.evBakim;
    },
    setEvYasam: (state, action) => {
      state.evYasam = action.payload.evYasam;
    },
    setTeknoloji: (state, action) => {
      state.teknoloji = action.payload.teknoloji;
    },
    setEvcilHayvan: (state, action) => {
      state.evcilHayvan = action.payload.evcilHayvan;
    },
    setBebek: (state, action) => {
      state.bebek = action.payload.bebek;
    },
    setCinselSaglik: (state, action) => {
      state.cinselSaglik = action.payload.cinselSaglik;
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
