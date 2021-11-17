import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.scss";

// Vue.config.productionTip = false;

createApp(App).use(store).use(router).mount("#app");
