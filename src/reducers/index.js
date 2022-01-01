const INITIAL_STATE = {
  categories: [],
  favorites: [],
  cards: [],
  sliderData: [],
  footerLink: [],
  campaings: [],
  newItem: [],
  indirim: [],
  suIcecek: [],
  MeyveSebze: [],
  Firindan: [],
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
  bebek: [],
  evcilHayvan: [],
  cinselSaglik: [],
  isLoading: false,
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_FAV_LIST_SUCCESS":
      return { ...state, favorites: action.payload, isLoading: true };
    case "GET_FAV_LIST_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, categories: action.payload, isLoading: true };
    case "GET_CATEGORIES_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_CARDS_SUCCESS":
      return { ...state, cards: action.payload, isLoading: true };
    case "GET_CARDS_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_SLIDERDATA_SUCCESS":
      return { ...state, sliderData: action.payload, isLoading: true };
    case "GET_SLIDERDATA_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_FOOTERLINK_SUCCESS":
      return { ...state, footerLink: action.payload, isLoading: true };
    case "GET_FOOTERLINK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_CAMPAINGS_SUCCESS":
      return { ...state, campaings: action.payload, isLoading: true };
    case "GET_CAMPAINGS_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_NEWITEM_SUCCESS":
      return { ...state, campaings: action.payload, isLoading: true };
    case "GET_NEWITEM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_INDIRIM_SUCCESS":
      return { ...state, indirim: action.payload, isLoading: true };
    case "GET_INDIRIM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_SUICECEK_SUCCESS":
      return { ...state, suIcecek: action.payload, isLoading: true };
    case "GET_SUICECEK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_MEYVESEBZE_SUCCESS":
      return { ...state, MeyveSebze: action.payload, isLoading: true };
    case "GET_MEYVESEBZE_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_FIRINDAN_SUCCESS":
      return { ...state, Firindan: action.payload, isLoading: true };
    case "GET_FIRINDAN_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_TEMELGIDA_SUCCESS":
      return { ...state, temelGida: action.payload, isLoading: true };
    case "GET_TEMELGIDA_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_ATISTIRMALIK_SUCCESS":
      return { ...state, atistirmalik: action.payload, isLoading: true };
    case "GET_ATISTIRMALIK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_DONDURMA_SUCCESS":
      return { ...state, dondurma: action.payload, isLoading: true };
    case "GET_DONDURMA_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_YIYECEK_SUCCESS":
      return { ...state, yiyecek: action.payload, isLoading: true };
    case "GET_YIYECEK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_SUTURUNLERİ_SUCCESS":
      return { ...state, sutUrunleri: action.payload, isLoading: true };
    case "GET_SUTURUNLERİ_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_FITFORM_SUCCESS":
      return { ...state, fitForm: action.payload, isLoading: true };
    case "GET_FITFORM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_KISISELBAKIM_SUCCESS":
      return { ...state, kisiselBakim: action.payload, isLoading: true };
    case "GET_KISISELBAKIM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_EVBAKIM_SUCCESS":
      return { ...state, evBakim: action.payload, isLoading: true };
    case "GET_EVBAKIM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_EVYASAM_SUCCESS":
      return { ...state, evYasam: action.payload, isLoading: true };
    case "GET_EVYASAM_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_TEKNOLOJI_SUCCESS":
      return { ...state, teknoloji: action.payload, isLoading: true };
    case "GET_TEKNOLOJI_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_EVCILHAYVAN_SUCCESS":
      return { ...state, evcilHayvan: action.payload, isLoading: true };
    case "GET_EVCILHAYVAN_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_BEBEK_SUCCESS":
      return { ...state, bebek: action.payload, isLoading: true };
    case "GET_BEBEK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_CINSELSAGLIK_SUCCESS":
      return { ...state, cinselSaglik: action.payload, isLoading: true };
    case "GET_CINSELSAGLIK_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    default:
      return state;
  }
};
