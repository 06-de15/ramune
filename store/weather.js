// データを定義するところ
export const state = () => ({
  list: []
})

// stateを返すところ(返す専門)
export const getters = {
  list: state => state.list
}

// 非同期処理ができるメソッド郡
export const actions = {
  async fetchWeatherReport({ commit }) {
    const weatherResponse = await this.$axios.$get(
      'https://api.openweathermap.org/data/2.5/forecast?q=Sendai&units=metric&APPID=f409941d71057b26fbb04ad1858159f8'
    )
    commit('setList', weatherResponse.list)
  }
}

// stateを変更できる唯一の神様
export const mutations = {
  setList(state, list) {
    state.list = list
  }
}
