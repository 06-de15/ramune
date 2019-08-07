<template>
  <div class="container">
    <div>
      <h1 class="title">
        猪苗代
      </h1>
      <p class="caution">世界標準時なので＋9時間してください</p>
      <weather-list :weather-list="list" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherList from '~/components/WeatherList'

export default {
  components: {
    WeatherList
  },
  computed: {
    ...mapGetters({
      list: 'weather/list'
    })
  },
  async fetch({ app, store }) {
    const weatherResponse = await app.$axios.$get(
      'https://api.openweathermap.org/data/2.5/forecast?q=Inawashiro&units=metric&APPID=f409941d71057b26fbb04ad1858159f8'
    )

    store.commit('weather/setList', weatherResponse.list)
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
