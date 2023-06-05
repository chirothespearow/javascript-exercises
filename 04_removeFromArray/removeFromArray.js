const removeFromArray = function(arr,...args) {
    var arr2 =[];
    for(let i =0; i<arr.length ; i++){
        if(!args.includes(arr[i])){
            arr2=arr2.concat(arr.slice(i,i+1));
        }
    }
    return arr2;
};
// Do not edit below this line
module.exports = removeFromArray;
