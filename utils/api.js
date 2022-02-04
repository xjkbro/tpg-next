// import qs from 'qs';
// const query = qs.stringify({
//     sort: ['title:asc'],
//     // filters: {
//     //   title: {
//     //     $eq: 'hello',
//     //   },
//     // },
//     populate: '*',
//     fields: ['title'],
//     pagination: {
//       pageSize: 10,
//       page: 1,
//     },
//     publicationState: 'live',
//     locale: ['en'],
//   }, {
//     encodeValuesOnly: true, // prettify url
//   });

// for reference, might need in future for more complex queries

export function getStrapiURL(path) {
  if (path.indexOf("/") != 0) {
    return path
  } else {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL ||
      "https://tpg-strapi.herokuapp.com"
    }${path}`
  }
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
/**
 * FETCH Categories
 * @returns
 */
export async function getCategories() {
  const categories = await fetchAPI("/api/categories")
  return categories.data
}

export async function getCategory(slug) {
  const categories = await fetchAPI(
    `/api/categories?filters[slug][$eq]=${slug}`
  )
  return categories?.data?.[0]
}
/**
 * FETCH Libraries
 * @returns
 */
export async function getLibraries() {
  const libraries = await fetchAPI(
    "/api/libraries?populate[media_source][populate]=*"
  )
  return libraries.data
}

export async function getLibrary(slug) {
  const libraries = await fetchAPI(`/api/libraries?filters[slug][$eq]=${slug}`)
  return libraries?.data?.[0]
}
export async function getLibraryMediaSourceBySlug(slug) {
  const libraries = await fetchAPI(
    `/api/libraries?populate[media_source][populate][media][populate]=*&filters[slug][$eq]=${slug}`
  )
  return libraries?.data?.[0]
}
/**
 * FETCH Products
 * @returns
 */
export async function getProducts() {
  const products = await fetchAPI("/api/products?populate=product_imgs")
  return products.data
}

export async function getProduct(slug) {
  const products = await fetchAPI(
    `/api/products?filters[slug][$eq]=${slug}&populate=product_imgs`
  )
  return products?.data?.[0]
}

export async function getProductsFromCategory(slug) {
  const products = await fetchAPI(
    `/api/products?filters[categories][slug][$eq]=${slug}&populate=product_imgs`
  )
  // console.log(products)
  return products.data
}
/**
 * FETCH Orders
 * @returns
 */
export async function getOrders() {
  const orders = await fetchAPI("/api/orders")
  return orders.data
}
