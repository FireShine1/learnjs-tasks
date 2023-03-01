let arr = ["a", "b"];

arr.push(function() {
  conosle.log( this );
})

arr[2](); // Выведется массив: a,b,function(){...}. Работает, как вызов метода объекта.