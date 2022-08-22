<template>
  <h1>Types Of Lighting We Sell</h1>
  <br />
  <img v-if="events === null" src="../../src/assets/images/spinner.jpg" />
  <div class="events" :class="isActive">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      v-if="page != 1"
      >Prev Page
    </router-link>

    <div class="numeraic" :data-numOFpages="allPages">
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
import { watchEffect } from 'vue'

export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    numOfPages: {
      type: Number,
      required: false
    }
  },
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      totalEvents: 0,
      isActive: true
    }
  },
  created() {
    watchEffect(() => {
      this.totalEvents = this.$store.state.numOfPaages
      this.$store
        .dispatch('fetchEvents', this.$route.query.page)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
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
    },
    events() {
      return this.$store.state.events
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
  color: #fff;
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
