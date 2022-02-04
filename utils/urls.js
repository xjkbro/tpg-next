// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tpg-strapi.herokuapp.com/';
/**
 * Given an image, return the URL
 * @param {any} image
 */
export const fromImageToUrl = (image) => {
    if(!image) {
        return "/vercel.svg";
    }else{
        if(image.url.indexOf('/') === 0){
            return `${API_URL}${image.url}`;
        }
    }
    return image.url;
}