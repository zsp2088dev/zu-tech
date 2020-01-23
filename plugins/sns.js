export const generateShareUrl = (service, title, url) => {
  if (service === 'Twitter') {
    return twitter(title, url)
  }

  if (service === 'Facebook') {
    return facebook(url)
  }

  if (service === 'Pocket') {
    return pocket(title, url)
  }

  if (service === 'Hatena') {
    return hatena(url)
  }
}
const twitter = (title, url) => {
  return `https://twitter.com/intent/tweet?text=${title.replace(
    /\+/g,
    '%2B'
  )}&url=${url}`
}

const facebook = (url) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`
}

const pocket = (title, url) => {
  return `http://getpocket.com/edit?title=${title}&url=${url}`
}

const hatena = (url) => {
  return `http://b.hatena.ne.jp/entry/s/${url}`
}
