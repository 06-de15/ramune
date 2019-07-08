// データを定義するところ
export const state = () => ({
  list: []
})

// stateを返すところ(返す専門)
export const getters = {
  list: state => state.list
}

// 非同期処理ができるメソッド郡
export const actions = {}

// stateを変更できる唯一の神様
export const mutations = {
  setList(state, list) {
    state.list = list
  }
}
