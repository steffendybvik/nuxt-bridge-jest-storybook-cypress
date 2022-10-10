export default {
  namespaced: true,
  state: () => ({ item: { title: 'Hello from auth module.' } }),
  getters: { getItem: (state) => state.item },
  mutations: {},
  actions: {},
}
