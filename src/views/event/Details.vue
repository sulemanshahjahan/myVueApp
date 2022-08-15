<!-- eslint-disable prettier/prettier -->
<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.details }}</p>
</template>

<script>
export default {
  props: ['event']
}
</script>
