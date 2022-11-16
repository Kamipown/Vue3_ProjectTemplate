import { createStore } from 'vuex'

import { module } from './modules'

const state = () => ({
  theme: 'light',
  language: 'fr',
})

const actions = {}

const store = createStore({
  state,
  actions,
  modules: {
    module,
  },
})

export default store
