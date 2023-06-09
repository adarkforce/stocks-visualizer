/* eslint-disable import/order */
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import "@/styles/styles.scss";
import "@core/scss/index.scss";
import { createApp } from "vue";

loadFonts();

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");
