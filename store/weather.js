// データを定義するところ
export const state = () => ({
  forecasts: [],
  title: '',
  description: {
    text: ''
  }
})

// stateを返すところ(返す専門)
export const getters = {
  forecasts: state => state.forecasts,
  title: state => state.title,
  descriptionText: state => state.description.text
}

// 非同期処理ができるメソッド郡
export const actions = {
  async fetchWeaterReport({ commit }) {
    const weatherResponse = await this.$axios.$get(
      'http://weather.livedoor.com/forecast/webservice/json/v1?city=040010'
    )
    commit('setForecasts', weatherResponse.forecasts)
    commit('setTitle', weatherResponse.title)
    commit('setDescription', weatherResponse.description.text)
  }
}

// stateを変更できる唯一の神様
export const mutations = {
  setForecasts(state, forecasts) {
    state.forecasts = forecasts
  },
  setTitle(state, title) {
    state.title = title
  },
  setDescriptionText(state, text) {
    state.description.text = text
  }
}
