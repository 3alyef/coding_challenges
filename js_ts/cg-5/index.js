function ArrayPlus(array) {
    return array.reduce((p, c)=> p+c)
}

console.log(ArrayPlus([500, 500, 1000, 67]))