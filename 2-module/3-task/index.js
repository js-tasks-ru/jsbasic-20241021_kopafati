let calculator = {
  sum: function(){
    return this.a + this.b;
  },
  mul:function(){
    return this.a * this.b
  },
  read:function(a,b){
   this.a =a
   this.b = b
  }};
  calculator.read(3,5)
  console.log(calculator.sum())
  console.log(calculator.mul())

  
  
  
  // ваш код


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
