import { join, resolve } from 'path'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'bauta',
    configKey: 'bauta',
    compatibility: {
      nuxt: '^2.6.0',
    },
  },

  defaults: {
    enabled: true,
  },

  hooks: {
    'components:dirs': (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
      })
    },
  },

  setup(options) {
    if (!options.enabled) return

    const pluginsToSync = ['plugins/index', 'store/index']
    for (const pathString of pluginsToSync) {
      addPlugin(resolve(__dirname, pathString))
    }
  },
})
