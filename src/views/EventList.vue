<template>
  <h1>Events For Good</h1>
  <br />
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: grid;
  align-items: baseline;
  justify-content: center;
  justify-items: stretch;
  column-count: 3;
  grid-template-columns: repeat(3, 16%);
  column-gap: 0;
}
</style>
