let array = [2,5,11,1,25,3,16,110,28,3,356,37,15];
let sortedArray = [];

//console.log(array)

let min = array[0];

/*
for (let item of array){
    //console.log("item", item);
    if (min > item){
         min = item}
    //console.log("minimum", min)
  }
*/


function minimum(arr){
  for (let item of arr){
      //console.log("item", item);
      if (min > item){
           min = item}
      //console.log("minimum", min)
    }
    return min

}

//console.log("minimum function", minimum(array))

function arrayRemove(arr, value) {
    return arr.filter(function(element){
        return element != value;
    });
}
//array = arrayRemove(array, minimum(array))

//console.log("Array", array)

function pushRemove (){
  let newArray = arrayRemove(array, minimum(array));
  console.log("New Array", newArray)

  sortedArray.push(minimum(array));

  console.log("Array", array)
}

for ( let i = 0; i < array.length; i++){
    console.log("i", i)
    console.log("minimum", min)
    pushRemove();

    //console.log("Array", array)
}
//console.log("Array", array)
console.log("Sorted array", sortedArray)
