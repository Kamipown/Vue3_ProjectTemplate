import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import theming from '@/theming'

library.add(fas)
library.add(far)
library.add(fab)

const app = createApp(App).use(i18n).use(router).use(store).use(theming)

app.mount('#root')
