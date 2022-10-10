export default {
  namespaced: true,
  state: () => ({ item: { title: 'Hello from bauta module.' } }),
  getters: { getItem: (state) => state.item },
  mutations: {},
  actions: {},
}
