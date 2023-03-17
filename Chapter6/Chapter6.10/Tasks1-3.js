//Task1
function f() {
  console.log( this ); // null
}

let user = {
  g: f.bind(null)
};

user.g();

//Task2
function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася

//Task3
function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // undefined