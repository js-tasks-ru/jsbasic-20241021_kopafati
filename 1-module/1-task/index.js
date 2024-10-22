function factorial(n) {
let result = n;
if(n===0) return 1
for(let i=0; i< n; i++){
  result = n * factorial(n-1)
}
return result;
}
factorial(0);
factorial(1);
factorial(3);
factorial(5);