import { defineNuxtPlugin } from '@nuxt/bridge/dist/runtime'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('hello', () => 'my injected function')
})
