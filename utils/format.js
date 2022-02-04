/**
 * Display number with two digits
 * @param {int} number
 * 
 */
export const twoDecimals = (number) => parseFloat(number).toFixed(2);

/**
 *  Given a string and int, will return truncated string that is n length.
 *  @param {string} str
 *  @param {int} n
 */
 export const truncateString = (str, n) => {
    if(str.length > n)
        return str.substring(0, n) + '...';
    else
        return str
}