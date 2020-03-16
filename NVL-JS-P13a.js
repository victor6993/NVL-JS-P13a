var primos = [];
primos[0] = 1;

function calcularPrimos(n) {

    let i = 1;
    let k = 1;
    do {
        i++;
        if(esPrimo(i)) {
            primos[k++] = i;
        }
    } while (primos.length < (n));
    console.log(primos);
}

function esPrimo(num) {
    for(let j = 2; j < num; j++) {
        if(num%j === 0) {
            return false;
        } 
    }
    return num!==1;
}

calcularPrimos(30);