<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        ramune
      </h1>
      <h2 class="subtitle">
        遊びページ
      </h2>
      <p class="caution">世界標準時なので＋9時間してください</p>
      <weather-list :weather-list="list" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import WeatherList from '~/components/WeatherList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Logo,
    WeatherList
  },
  computed: {
    ...mapGetters({
      list: 'weather/list'
    })
  },
  created() {
    this.fetchWeatherReport()
  },
  methods: {
    ...mapActions({
      fetchWeatherReport: 'weather/fetchWeatherReport'
    })
  }
}
</script>

<style>
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.caution {
  margin-top: 12px;
}
</style>
