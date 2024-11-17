

function sumSalary(salaries) {

  let sumSalary =0;

  for(let key in salaries){
    if(!isNaN(salaries[key]) && isFinite(salaries[key]))
    {sumSalary += salaries[key];}
    if(salaries[key] && typeof salaries[key]==='number'){
      
  }
}
return sumSalary
  // ваш код...
}
