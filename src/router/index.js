import Vue from "vue";
import Router from "vue-router";
import TweetPage from "@/pages/TweetPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TweetPage",
      component: TweetPage,
    },
  ],
});
