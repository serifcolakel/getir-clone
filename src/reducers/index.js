const INITIAL_STATE = {
  categories: [],
  favorites: [],
  cards: [],
  sliderData: [],
  footerLink: [],
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
    default:
      return state;
  }
};
