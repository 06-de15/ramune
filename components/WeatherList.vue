<template>
  <div>
    {{ data }}

    <weather-item
      v-for="(weather, index) in weatherList"
      :key="index"
      :weather="weather"
    />
  </div>
</template>

<script>
import WeatherItem from '~/components/WeatherItem.vue'

export default {
  components: {
    WeatherItem
  },
  props: {
    weatherList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped></style>
