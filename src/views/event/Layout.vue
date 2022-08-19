<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvent(parseInt(routeTo.params.id))
      .then(response => {
        next(comp => {
          console.log('Event ID: ' + routeTo.params.id)
          comp.event = response.data
        })
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: 'NetworkError',
            params: { resource: 'event' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
