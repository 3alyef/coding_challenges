// (1,1,2,3,5,8,13,21,34,55...)
/*function generateFibonacci(n, acm = 1, array = []){
    let prevArray = [...array]
    array.push(acm);
    
    if(array[array.length - 1] < n){
        if(array.length >= 2){ 
            return generateFibonacci(n, (acm + prevArray[prevArray.length -1]), array)
        } 
        return generateFibonacci(n, acm, array)

    } else {
        return array
    }
}*/
function generateFibonacci(n) {
    let fibonacci = [1, 1];
    while (true) {
        let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        
        if (nextNumber > n) {
            break;
        }
        
        fibonacci.push(nextNumber);
    }

    return fibonacci;
}

console.log(generateFibonacci(48 ** 67))