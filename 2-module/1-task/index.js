let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}


function sumSalary(salaries) {

  let sumSalary =0;

  for(let key in salaries){
    if(salaries[key] && typeof salaries[key]==='number'){
      sumSalary += salaries[key];
  }
}
return sumSalary
  // ваш код...
}
console.log(sumSalary(salaries))