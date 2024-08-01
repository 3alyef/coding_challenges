function verifyString(word) {
    let wordRev = ([...word].reverse()).reduce((prevV, cur) => `${prevV}${cur}`);
    return word === wordRev ? "Palindromo" : "Is not a palindromo"
}

console.log(verifyString("ana"));
console.log(verifyString("carro"))