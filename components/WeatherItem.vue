<template>
  <div class="mybox">
    <p>{{ weather.dt_txt | moment }}</p>
    <p>{{ weather.main.temp }}°C</p>
    <img
      id="icon"
      :src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`"
    />
  </div>
</template>
<script>
import moment from 'moment-timezone'

export default {
  filters: {
    moment(timestamp) {
      moment.tz.set(timestamp, 'Asia/Tokyo').format('ha z')
    }
  },
  props: {
    weather: {
      required: true,
      type: Object
    }
  },
  computed: {
    styles() {
      return function(date) {
        return { content: date }
      }
    }
  }
}
</script>
<style scoped>
#icon {
  position: absolute;
  top: -25px;
  left: 0;
}
.mybox {
  background-color: #fff; /* 背景色 */
  border: 2px solid #51ab7a; /* 線の太さ・種類・色 */
  border-radius: 5px;
  margin: 40px 5px 5px 20px; /* 外側の余白 上・右・左・下 */
  padding: 25px 20px 10px 20px; /* 内側の余白 上・右・左・下 */
  position: relative;
}
</style>
