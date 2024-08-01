const array = [1, 2, 5, 6, 9];

function checkValue(array, value) {
    return array.includes(value) ? true : false;
}
console.log(checkValue(array, 2))