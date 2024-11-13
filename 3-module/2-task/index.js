let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let resultArr = []
  for(let i=0; i<arr.length; i++){
    
     if(a <= arr[i] && b >= arr[i]){
    resultArr.push(arr[i])
   
  }

  // ваш код...
 
}
return resultArr
}


console.log(resultArr)
console.log(arr)