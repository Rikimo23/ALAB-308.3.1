function isPrime(startingNum) {
    let starting = startingNum;

    while(starting) {
        for(let i = 2; i < starting; i ++) {
            if(starting % i === 0) return [false, i];

        }


        starting++;
    
    }
    return true;
}


console.log(isPrime(100))