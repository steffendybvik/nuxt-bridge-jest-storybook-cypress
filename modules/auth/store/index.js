import settingsModule from './modules/settings'

// const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// const { namespace } = options

export default ({ store }) => {
  store.registerModule('auth', settingsModule, {
    preserveState: Boolean(store.state.auth),
  })
}
