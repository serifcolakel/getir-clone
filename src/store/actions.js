import axios from "axios";
import { contextActions } from "./context";

export const getCategories = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/categories"
    );
    dispatch(contextActions.setCategories({ categories: data.data }));
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/favorite"
    );
    dispatch(contextActions.setFavorites({ favorites: data.data }));
  };
};

export const getCards = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/cards"
    );
    dispatch(contextActions.setCards({ cards: data.data }));
  };
};

export const getSliderData = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/sliderData"
    );
    dispatch(contextActions.setSliderData({ sliderData: data.data }));
  };
};

export const getFooterLink = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/footerLink"
    );
    dispatch(contextActions.setFooterLink({ footerLink: data.data }));
  };
};

export const getCampaings = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/campaings"
    );
    dispatch(contextActions.setCampaings({ campaings: data.data }));
  };
};

export const getNewItem = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/newItem"
    );
    dispatch(contextActions.setNewItem({ newItem: data.data }));
  };
};

export const getIndirim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/discount"
    );
    dispatch(contextActions.setIndirim({ indirim: data.data }));
  };
};

export const getSuIcecek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/suicecek"
    );
    dispatch(contextActions.setSuIcecek({ suIcecek: data.data }));
  };
};

export const getMeyveSebze = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/meyvesebze"
    );
    dispatch(contextActions.setMeyveSebze({ MeyveSebze: data.data }));
  };
};

export const getFirindan = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/firindan"
    );
    dispatch(contextActions.setFirindan({ Firindan: data.data }));
  };
};

export const getTemelGida = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/temelgida"
    );
    dispatch(contextActions.setTemelGida({ temelGida: data.data }));
  };
};

export const getAtistirmalik = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/atistirmalik"
    );
    dispatch(contextActions.setAtistirmalik({ atistirmalik: data.data }));
  };
};

export const getDondurma = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/dondurma"
    );
    dispatch(contextActions.setDondurma({ dondurma: data.data }));
  };
};
export const getEvcilHayvan = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evcilHayvan"
    );
    dispatch(contextActions.setEvcilHayvan({ evcilHayvan: data.data }));
  };
};

export const getTeknoloji = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/teknoloji"
    );
    dispatch(contextActions.setTeknoloji({ teknoloji: data.data }));
  };
};

export const getYiyecek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/yiyecek"
    );
    dispatch(contextActions.setYiyecek({ yiyecek: data.data }));
  };
};
export const getBebek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/bebek"
    );
    dispatch(contextActions.setBebek({ bebek: data.data }));
  };
};

export const getSutUrunleri = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/suturunleri"
    );
    dispatch(contextActions.setSutUrunleri({ sutUrunleri: data.data }));
  };
};

export const getCinselSaglik = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/cinselSaglik"
    );
    dispatch(contextActions.setCinselSaglik({ cinselSaglik: data.data }));
  };
};

export const getFitForm = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/fitform"
    );
    dispatch(contextActions.setFitForm({ fitForm: data.data }));
  };
};

export const getKisiselBakim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/kisiselbakim"
    );
    dispatch(contextActions.setKisiselBakim({ kisiselBakim: data.data }));
  };
};
export const getEvBakim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evbakim"
    );
    dispatch(contextActions.setEvBakim({ evBakim: data.data }));
  };
};

export const getEvYasam = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evyasam"
    );
    dispatch(contextActions.setEvYasam({ evYasam: data.data }));
  };
};

export const getUrunler = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/urunler"
    );
    dispatch(contextActions.setUrunler({ Urunler: data.data }));
  };
};
