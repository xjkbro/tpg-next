export function getStrapiMedia(url, width) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }
  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://tpg-strapi.herokuapp.com"
  }${url}?w=${width}`
}
