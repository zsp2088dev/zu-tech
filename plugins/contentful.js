import { createClient } from 'contentful'

// Contentfulより取得した記事を変換
const entries = (mapEntries) => {
  return mapEntries.map((entry) => {
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

// Contentfulより全記事取得
export const findAllEntries = () => {
  const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
  }
  const contentType = process.env.CTF_CONTENT_TYPE_ID
  const client = createClient(config)

  return client
    .getEntries({
      content_type: contentType,
      order: '-sys.createdAt'
    })
    .then((mapEntries) => {
      return entries(mapEntries.items)
    })
}

// generate時の環境変数が読み込めないため、設定を引数に指定して全記事を取得
export const findAllEntriesWithConfig = (config, contentType) => {
  const client = createClient(config)
  return client
    .getEntries({
      content_type: contentType
    })
    .then((mapEntries) => {
      return entries(mapEntries.items)
    })
}

// IDを指定して特定の記事を取得
export const findEntryById = (id) => {
  const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
  }
  const contentType = process.env.CTF_CONTENT_TYPE_ID
  const client = createClient(config)

  return client
    .getEntries({
      content_type: contentType,
      'fields.slug': id
    })
    .then((mapEntries) => {
      return entries(mapEntries.items)[0]
    })
}
