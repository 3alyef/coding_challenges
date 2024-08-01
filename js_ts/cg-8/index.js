let array = [
    {name: "test", value: 5},
    {name: "novo", value: 56},
    {name: "word", value: 19},
    {name: "world", value: 67},
    {name: "earth", value: 48}    
];

function orderNumbers(array, property) {
    return array.sort((a, b)=> b[property] - a[property])
}

console.log(orderNumbers(array, "value"))