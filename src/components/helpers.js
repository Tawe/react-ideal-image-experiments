export const ssr =
  typeof window === 'undefined' || window.navigator.userAgent === 'ReactSnap'

export const nativeConnection = !ssr && !!window.navigator.connection

// export const getScreenWidth = () => {
//   if (ssr) return 0
//   const devicePixelRatio = window.devicePixelRatio || 1
//   const {screen} = window
//   const {width} = screen
//   // const angle = (screen.orientation && screen.orientation.angle) || 0
//   // return Math.max(width, height)
//   // const rotated = Math.floor(angle / 90) % 2 !== 0
//   // return (rotated ? height : width) * devicePixelRatio
//   return width * devicePixelRatio
// }
// export const screenWidth = getScreenWidth()

export const guessMaxImageWidth = dimensions => {
  if (ssr) return 0
  const imgWidth = dimensions.width

  const {screen} = window
  const sWidth = screen.width
  const sHeight = screen.height

  const {documentElement} = document
  const windowWidth = window.innerWidth || documentElement.clientWidth
  const windowHeight = window.innerHeight || documentElement.clientHeight

  const windowResized = sWidth > windowWidth

  let result
  if (windowResized) {
    const body = document.getElementsByTagName('body')[0]
    const scrollWidth = windowWidth - imgWidth
    const isScroll =
      body.clientHeight > windowHeight || body.clientHeight > sHeight
    if (isScroll && scrollWidth <= 15) {
      result = sWidth - scrollWidth
    } else {
      // result = imgWidth / (windowWidth - scrollWidth) * (sWidth - scrollWidth)
      result = imgWidth / windowWidth * sWidth
    }
  } else {
    result = imgWidth
  }
  const devicePixelRatio = window.devicePixelRatio || 1
  return result * devicePixelRatio
}

export const bytesToSize = bytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

// async function supportsWebp() {
//   if (typeof createImageBitmap === 'undefined' || typeof fetch === 'undefined')
//     return false
//   return fetch(
//     'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
//   )
//     .then(response => response.blob())
//     .then(blob => createImageBitmap(blob).then(() => true, () => false))
// }
// let webp = undefined
// const webpPromise = supportsWebp()
// webpPromise.then(x => (webp = x))
// export default () => {
//   if (webp === undefined) return webpPromise
//   return {
//     then: callback => callback(webp),
//   }
// }

const detectWebpSupport = () => {
  if (ssr) return false
  const elem = document.createElement('canvas')
  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
  } else {
    // very old browser like IE 8, canvas not supported
    return false
  }
}

export const supportsWebp = detectWebpSupport()
