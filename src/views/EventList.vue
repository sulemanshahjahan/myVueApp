<template>
  <h1>Types Of Lighting We Sell</h1>
  <br />
  <img v-if="events === null" src="../../src/assets/images/spinner.jpg" />
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      v-if="page != 1"
      >Prev Page
    </router-link>

    <div :id="allPages" class="numeraic">
      <router-link
        v-for="index in allPages"
        v-show="page != index"
        :key="index"
        :to="'/?page=' + index"
        >.{{ index }}.
      </router-link>
    </div>

    <router-link
      id="page-next"
      v-if="hasNextPage"
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      >Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  props: ['page'],
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        next(comp => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        this.events = response.data // <-----
        this.totalEvents = response.headers['x-total-count'] // <-----
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      // First, calculate total number of pages.
      var totalPages = Math.ceil(this.totalEvents / 2) // 2 is per page count.
      return this.page < totalPages
    },
    allPages() {
      return Math.ceil(this.totalEvents / 2)
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3%;
}

.pagination {
  display: flex;
  width: 340px;
  margin: auto;
  margin-top: 40px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
@media (max-width: 480px) {
  .events {
    display: block;
    column-gap: 0%;
  }
}
</style>
