import { createClient } from 'contentful'

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
}

const contentType = process.env.CTF_CONTENT_TYPE
const client = createClient(config)

// Contentfulより全記事取得
export const findAllEntries = () => {
  return client.getEntries(contentType).then((entries) => {
    return entries.items.map((value) => {
      return {
        title: value.fields.title,
        slug: value.fields.slug,
        image: value.fields.image,
        body: value.fields.body
      }
    })
  })
}

// IDを指定して特定の記事を取得
export const findEntryById = (id) => {
  return client.getEntries(id).then((entries) => {
    const entry = entries.items[0]
    return {
      title: entry.fields.title,
      slug: entry.fields.slug,
      image: entry.fields.image,
      body: entry.fields.body
    }
  })
}
