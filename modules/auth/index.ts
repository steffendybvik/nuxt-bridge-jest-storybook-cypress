import { resolve, join } from 'path'
import { readdirSync } from 'fs'

// @ts-ignore
export default function (moduleOptions) {
  const options = {
    ...moduleOptions,
    // @ts-ignore
    ...this.options.auth,
  }

  if (!options.namespace) options.namespace = 'auth'
  const { namespace } = options

  // @ts-ignore
  this.nuxt.hook('components:dirs', (dirs: any) => {
    dirs.push({
      path: join(__dirname, 'components'),
    })
  })

  const pluginsToSync = ['store/index.js']
  for (const pathString of pluginsToSync) {
    // @ts-ignore
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    })
  }

  const foldersToSync = ['store/modules']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      // @ts-ignore
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options,
      })
    }
  }
}
