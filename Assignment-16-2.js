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


