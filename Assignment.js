//Problem-1
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}

var output=feetToMile(100);
console.log(output);


//Problem-2
var sum=0;
function woodCalculator(nchair,ntable,nbed){
        var wchair=nchair*1;
        var wtable=ntable*3;
        var wbed=nbed*5;
        sum=sum+wchair+wtable+wbed;
        return sum;
}
var totalCost=woodCalculator(6,3,2);
console.log(totalCost);




//Problem-3

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



//Problem-4
var lengthOfNames=[];

function tinyFriend(friendsName){
    for( var i=0;i<=3;i++){
        lengthOfNames.push(friendsName[i].length);
    }
    
    var minName=Math.min(...lengthOfNames);

    for(var i=0;i<=3;i++){
        if(friendsName[i].length==minName){
            return friendsName[i];
        }
    }
    
}
var fname=["Joy","Sakif","Shaswato","Fahim"];
var puchka=tinyFriend(fname);
console.log(puchka);