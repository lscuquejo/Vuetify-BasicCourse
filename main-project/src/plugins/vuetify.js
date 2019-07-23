import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#FF775F",
    success: "#FF9683",
    info: "#FFB5A6",
    error: "#FFD0C7",
  }
})
