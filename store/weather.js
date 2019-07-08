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
  feachWeaterReport({ commit }) {
    // TODO お天気取ってくるよ
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
