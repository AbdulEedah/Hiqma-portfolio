import { createApp } from 'vue'
import { Quasar, Notify, Loading, Dialog } from 'quasar'
import App from './App.vue'
import router from './router'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/dist/quasar.css'
import './css/app.scss'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
    Notify,
    Loading,
    Dialog
  },
  config: {
    notify: {},
    loading: {}
  }
})

app.use(router)
app.mount('#q-app')
