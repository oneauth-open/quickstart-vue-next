import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import OneAuth from "oneauth-sdk-core";
import OneAuthVue from "oneauth-sdk-vue-next";
const oneAuth = new OneAuth({
  issuer: `kang.oneauth.cn/oauth/v1`,
  clientId: `2YXXZ78611K0c8906MX6RJ8c0s84VcQB`,
  redirectUri: `http://localhost:8080/callback`,
  scopes: ["openid", "profile", "email"],
});

createApp(App)
  .use(router)
  .use(OneAuthVue, {
    oneAuth,
  })
  .mount("#app");
