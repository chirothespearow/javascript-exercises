const repeatString = function(string,num) {
    if(num<0){return 'ERROR';}
    let str2='';
    for(let i = 0;i<num;i++){
        str2+=string;
    }
    return str2;
};
console.log(repeatString('hey',3));
// Do not edit below this line
module.exports = repeatString;
