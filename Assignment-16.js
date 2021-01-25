var lengthOfNames=[];

function tinyFriends(friendsName){
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
var output=tinyFriends(fname);
console.log(output);