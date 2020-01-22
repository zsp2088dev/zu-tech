import Fuse from 'fuse.js'

export const getFilteredEntries = (keyword, entries) => {
  if (keyword.length === 0) {
    return entries
  }

  const options = {
    threshold: 0.3,
    keys: ['title']
  }
  return new Fuse(entries, options).search(keyword)
}
