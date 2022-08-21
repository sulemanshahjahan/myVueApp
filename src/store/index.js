import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    user: 'Suleman Shahjahan',
    events: []
  },
  mutations: {
    ADD_EVENT(state, product) {
      state.events.push(product)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
})
