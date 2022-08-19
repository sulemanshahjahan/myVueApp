<template>
  <p>Register for the product.</p>
  <button @click="registerProduct">Register Now!</button>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      message: 0
    }
  },
  methods: {
    registerProduct() {
      this.$router.push({
        name: 'EventDetails',
        params: this.event.id
      })
    }
  }
}
</script>
