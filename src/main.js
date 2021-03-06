import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(Toast,{ })

let localAuthToken = localStorage.auth_token
let cookieExists = localAuthToken !== undefined && localAuthToken !== null
if (cookieExists) {
  const auth_token = localStorage.getItem('auth_token')
  const authTokenExists = auth_token !== undefined && auth_token !== null
  if (authTokenExists) {
    store.dispatch("company_manager/loginCompanyWithToken", {auth_token})
    store.dispatch("session_manager/loginUserWithToken", {auth_token})
  }
}

// Vue.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//   next(); 
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
