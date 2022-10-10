import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
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

    // 'pages:extend'(pages) {
    //   pages.push({
    //     name: 'folder-file',
    //     path: '/folder/file',
    //     file: resolve(__dirname, 'file.vue'),
    //   })
    // },
  },

  setup(options, nuxt) {
    if (options.enabled) {
      const runtimeDir = fileURLToPath(
        new URL('./runtime', import.meta.url).toString()
      )
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  },
})
