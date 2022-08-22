<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
      |
      <a href="#" @click="deleteThis">Delete</a>
    </div>
    <router-view :event="event" />
  </div>
</template>
<script>
import EventService from '@/services/EventService'
export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  },
  methods: {
    deleteThis() {
      EventService.deleteEvent(this.id)
        .then(response => {
          alert('DELETED SUCCESSFULLY:  ' + this.event.title + response.data)
          this.$router.push({
            name: 'EventList'
          })
        })
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }
  }
}
</script>
