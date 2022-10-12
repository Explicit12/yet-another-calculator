import "normalize.css";
import "./style.scss";

import { createApp } from "vue";
import App from "./App.vue";

import "./directives/ripple/vRipple.scss";
import vRipple from "./directives/ripple/vRipple";

const app = createApp(App);

// add rpple effect on click, you have to bind effect color value
app.directive("ripple", vRipple);

app.mount("#app");
