import { createClient } from 'contentful'
import website from './config/website'

require('dotenv').config()

export default {
  mode: 'spa',
  head: {
    title: process.env.WEBSITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32×32',
        href: '/favicon.png'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['@/plugins/fuse', '@/plugins/sns'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/markdownit'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },
  build: {
    extend(config, ctx) {}
  },
  generate: {
    async routes() {
      const config = {
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        timeout: 60000,
        retryLimit: 10
      }
      const contentType = process.env.CTF_CONTENT_TYPE_ID
      const client = createClient(config)
      const routing = await client.getEntries(contentType).then((entries) => {
        return [
          ...entries.items.map((entry) => {
            return {
              route: `/posts/${entry.fields.slug}`,
              payload: entry
            }
          })
        ]
      })
      return routing
    }
  },
  env: {
    WEBSITE_TITLE: website.title,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    CTF_CONTENT_TYPE_ID: process.env.CTF_CONTENT_TYPE_ID
  }
}
