/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let array = str.split(' ');
  for (let item of array) {
    if (item.includes(',')) {
      let result = item.split(',');

      for (let subItem of result) {
          array.push(subItem);
      }
    }
  }
  array = array
    .map(item => parseFloat(item))
    .filter(item => isFinite(item));

    return {
      'min': Math.min(...array),
      'max': Math.max(...array)
  }
}