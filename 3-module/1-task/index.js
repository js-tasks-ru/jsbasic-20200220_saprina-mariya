/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let salary = data.filter(data => data.age<=age).map(data => `${data.name}, ${data.balance}`).join('\n');
    return salary;
}
