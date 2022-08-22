import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    user: 'Suleman Shahjahan',
    events: [],
    event: {},
    numOfPaages: 0
  },
  totalEvents: 0,
  mutations: {
    ADD_EVENT(state, product) {
      state.events.push(product)
    },
    SET_EVENTS(state, products) {
      state.events = products
    },
    SET_EVENT(state, product) {
      state.event = product
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          // eslint-disable-next-line prettier/prettier
          throw(error)
        })
    },
    fetchEvents({ commit }, routeTO) {
      EventService.getEvents(2, parseInt(routeTO) || 1)
        .then(response => {
          commit('SET_EVENTS', response.data)
          this.state.numOfPaages = response.headers['x-total-count']
        })
        .catch(error => {
          // eslint-disable-next-line prettier/prettier
         throw(error)
        })
    },
    fetchEvent({ commit }, id) {
      const exstingEvent = this.state.events.find(event => event.id === id)
      if (exstingEvent) {
        commit('SET_EVENT', exstingEvent)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            // eslint-disable-next-line prettier/prettier
            throw(error)
          })
      }
    }
  },
  modules: {}
})
