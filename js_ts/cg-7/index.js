function contChar(word) {
    let ocorrency = {};

    [...word].map((char)=>{
        if(!ocorrency[char]){
            ocorrency[char] = 1;
        } else {
            ocorrency[char]++
        }
    })
    return ocorrency
}

console.log(contChar("cordialidade"))