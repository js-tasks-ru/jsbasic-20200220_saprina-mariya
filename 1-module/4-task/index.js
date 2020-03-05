/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let lowerSpam = str.toLowerCase();
    return lowerSpam.includes('1xbet') || lowerSpam.includes('xxx');
}
