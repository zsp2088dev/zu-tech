import { createClient } from 'contentful'

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
}

const contentType = process.env.CTF_CONTENT_TYPE_ID
const client = createClient(config)

// Contentfulより全記事取得
export const findAllEntries = () => {
  return client
    .getEntries({
      content_type: contentType,
      order: '-sys.createdAt'
    })
    .then((entries) => {
      return entries.items.map((value) => {
        return {
          title: value.fields.title,
          text: value.fields.text,
          slug: value.fields.slug,
          src: `https:${value.fields.image.fields.file.url}`,
          body: value.fields.body,
          tags: value.fields.tags
        }
      })
    })
}

// IDを指定して特定の記事を取得
export const findEntryById = (id) => {
  return client
    .getEntries({
      content_type: contentType,
      'fields.slug': id
    })
    .then((entries) => {
      const entry = entries.items[0]
      return {
        title: entry.fields.title,
        text: entry.fields.text,
        slug: entry.fields.slug,
        src: `https:${entry.fields.image.fields.file.url}`,
        body: entry.fields.body,
        tags: entry.fields.tags
      }
    })
}
