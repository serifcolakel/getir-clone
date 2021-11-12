const INITIAL_STATE = {
  categories: [],
  favorites: [],
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_FAV_LIST_SUCCESS":
      return { ...state, favorites: action.payload };
    case "GET_FAV_LIST_ERROR":
      return { ...state, message: action.payload };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, categories: action.payload };
    case "GET_CATEGORIES_ERROR":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
