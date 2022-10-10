import bautaModule from './modules/settings'

// const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// const { namespace } = options

export default ({ store }) => {
  store.registerModule('bauta', bautaModule, {
    preserveState: Boolean(store.state.bauta),
  })
}
