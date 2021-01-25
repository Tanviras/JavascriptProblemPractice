function brickCalculator(totalfloors){
    if(totalfloors>30){
        console.log("Vai 30 tola-e highest");
    }
    else if (totalfloors<=10){
        var totalbricks1=totalfloors*15*1000;

        var totalbricks=totalbricks1;
        return totalbricks;
    }
    else if(totalfloors>10 && totalfloors<=20){
        totalfloors2=totalfloors-10;

        var totalbricks2=totalfloors2*12*1000;
        var totalbricks1=10*15*1000;

        var totalbricks=totalbricks1+totalbricks2;
        return totalbricks;
    }
    else{
        totalfloors3=totalfloors-20;

        var totalbricks3=totalfloors3*10*1000;
        var totalbricks2=10*12*1000;
        var totalbricks1=10*15*1000;

        var totalbricks=totalbricks1+totalbricks2+totalbricks3;
        return totalbricks;
    }
}

var output=brickCalculator(29);
console.log(output);