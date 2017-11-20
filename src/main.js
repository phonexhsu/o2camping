// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Snotify from 'vue-snotify'
import Smooch from 'smooch'
import Scrollactive from 'vue-scrollactive'
import VueBar from 'vuebar'
import VeeValidate from 'vee-validate'
import VueProgressbar from 'vue-progressbar'
import { store } from './store/store'

const firebaseconfig = {
  apiKey: 'AIzaSyB5pVmH1KyhBOu2oSVis63e-Shgy74G950',
  authDomain: 'camping-173400.firebaseapp.com',
  databaseURL: 'https://camping-173400.firebaseio.com',
  projectId: 'camping-173400',
  storageBucket: 'camping-173400.appspot.com',
  messagingSenderId: '269662832460'
}
const firebaseApp = firebase.initializeApp(firebaseconfig)
Vue.prototype.$firebase = firebaseApp
Vue.prototype.$db = firebaseApp.database()

const fbui = new firebaseui.auth.AuthUI(firebase.auth())
const signInOptions = {
  provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  recaptchaParameters: {
    type: 'image',
    size: 'compact',
    badge: 'bottomright'
  }
}
fbui.start('#firebaseui-auth-container',
  {
    signInOptions,
    defaultCountry: 'TW',
    defaultNationalNumber: '123456',
    loginHint: '+886910123456'
  }
)

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultInputAutocomplete: 'on',
  defaultTooltipAnimated: true
})
// const snotifyglobalconfig = {
//  maxOnScreen: 8,
//  maxAtPosition: 4,
//  newOnTop: 100
// }
Vue.use(Snotify)
Vue.use(Scrollactive)
Vue.use(VueBar)
Vue.use(VeeValidate)

const progressbarconfig = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
Vue.use(VueProgressbar, progressbarconfig)

Smooch.init({
  appId: '598870f4e92a26520035ec4f',
  customText: {
    headerText: '客服對講機',
    inputPlaceholder: '在此輸入訊息內容...',
    sendButtonText: '傳送'
  },
  soundNotificationEnabled: true
})

Vue.config.productionTip = false
Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeMount: function () {
    const loadingComponent = this.$loading.open()
    loadingComponent.active = this.loading
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
