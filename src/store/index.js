import { createStore } from "vuex";
import axios from "axios";
import userFeed from "../store/user-feed.json";

const options = {
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "0e4cdff69emsh7712aafa81ccab9p1d2e10jsndfdfd7a6219d",
  },
};

export default createStore({
  state: {
    newsList: [],
    user: null,
    userFeed: {},
  },
  mutations: {
    SET_NEWS_TO_STATE: (state, newsList) => {
      state.newsList = newsList;
    },
    SET_USER_TO_STATE: (state, user) => {
      state.user = user;
    },
    SET_USER_VIDEOS_TO_STATE: (state, userFeed) => {
      state.userFeed = userFeed;
    },
  },
  actions: {
    GET_NEWS_FROM_API({ commit }) {
      return axios({
        ...options,
        url: "https://tiktok33.p.rapidapi.com/trending/feed",
        method: "GET",
      })
        .then((newsList) => {
          commit("SET_NEWS_TO_STATE", newsList.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    GET_USER_FROM_API({ commit }, nickname) {
      if (!nickname) {
        return;
      }
      return axios({
        ...options,
        url: `https://tiktok33.p.rapidapi.com/user/info/${nickname}/`,
        method: "GET",
      })
        .then((response) => {
          commit("SET_USER_TO_STATE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    GET_USER_VIDEOS_FROM_API({ commit }, nickname) {
      return axios({
        ...options,
        url: `https://tiktok33.p.rapidapi.com/user/feed/${nickname}/`,
        method: "GET",
      })
        .then((res) => {
          commit("SET_USER_VIDEOS_TO_STATE", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    GET_USER_VIDEOS_FROM_DISK({ commit }) {
      commit("SET_USER_VIDEOS_TO_STATE", userFeed);
    },
  },
  getters: {
    NEWSLIST(state) {
      return state.newsList;
    },
    USER(state) {
      return state.user;
    },
    USERFEEDS(state) {
      return state.userFeed;
    },
  },
  modules: {},
});
