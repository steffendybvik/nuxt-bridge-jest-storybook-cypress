import { defineNuxtPlugin } from '@nuxt/bridge/dist/runtime'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bauta', () => 'Hello World! from Bauta')
})
