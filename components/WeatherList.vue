<template>
  <div>
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
      required: true,
      default: function() {
        return []
      }
    }
  }
}
</script>
<style scoped></style>
