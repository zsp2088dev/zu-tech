import website from './config/website'
import { findAllEntriesWithConfig } from './plugins/contentful'

require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    title: website.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: website.description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: website.title
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: website.url
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: website.title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: website.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${website.url}/image.png`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
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
      const entries = await findAllEntriesWithConfig(
        config,
        process.env.CTF_CONTENT_TYPE_ID
      )
      return entries.map((entry) => {
        return {
          route: `/posts/${entry.slug}`,
          payload: entry
        }
      })
    }
  },
  env: {
    website,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    CTF_CONTENT_TYPE_ID: process.env.CTF_CONTENT_TYPE_ID
  }
}
