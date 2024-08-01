function calcFatRec(num, p = 1) {
    // Calcular o fatorial usando recursão
    if(num === 0) {
        return p
    }
    return calcFatRec(num - 1, (p * num));
}
function calcFatIt(num) {
    //Calcular o fatorial usando iteração
    let p = num;
    for(let i = 1; num > i; i++){
        p = p * (num - i);
    }
    return p
}

console.log(calcFatRec(4)); // 24
console.log(calcFatIt(4)); // 24