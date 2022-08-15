<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <img :src="event.image" />
      <h4>{{ event.title }}</h4>
      <p>{{ event.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-card img {
  width: 100%;
}
.event-link {
  color:#000;
  text-decoration: none;
}
@media (max-width: 480px) {
  .event-card {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
